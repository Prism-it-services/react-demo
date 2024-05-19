import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { join } from 'path';

export class SArunStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

  const userApi = new appsync.GraphqlApi(this, 'user-form-post-api', {

    name: 'api-to-persist-user-information',
    schema: appsync.SchemaFile.fromAsset('schema/schema.graphql'),
    authorizationConfig: {
      defaultAuthorization: {
        authorizationType: appsync.AuthorizationType.API_KEY,
      },
    },
    xrayEnabled: true,
  });


  const userFormTable = new dynamodb.Table(this, 'UserInformationDataTable', {
    partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
    billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
  });


  const dataSource = userApi.addDynamoDbDataSource('userFormInfoDataSource', userFormTable);

  dataSource.createResolver('MutationAddUserInfoResolver', {
    typeName: 'Mutation',
    fieldName: 'createUser',
    requestMappingTemplate: appsync.MappingTemplate.dynamoDbPutItem(
      appsync.PrimaryKey.partition('id').auto(), 
      appsync.Values.projecting('input')
     
    ), 

    responseMappingTemplate: appsync.MappingTemplate.dynamoDbResultItem(),
  })

  dataSource.createResolver('QueryUserListResolver',{
    typeName: 'Query',
    fieldName: 'listUsers',
    requestMappingTemplate: appsync.MappingTemplate.dynamoDbScanTable(),
    responseMappingTemplate: appsync.MappingTemplate.dynamoDbResultList(),
  });

  const openaiHandler = new NodejsFunction(this, 'OpenAIHandler', {
    runtime: lambda.Runtime.NODEJS_20_X,
    entry: join(__dirname, '..', 'lambda', 'openai-handler.ts'), 
    handler: 'handler',
    environment: {
      OPENAI_API_KEY: process.env.OPENAI_API_KEY!, 
    },
  });

  const api = new apigateway.RestApi(this, 'OpenAIAPI', {
    restApiName: 'OpenAI Service',
    description: 'This service handles OpenAI requests.',
    defaultCorsPreflightOptions: {
      allowOrigins: apigateway.Cors.ALL_ORIGINS, 
      allowMethods: apigateway.Cors.ALL_METHODS, 
    },
  });

  const chat = api.root.addResource('chat');
  const integration = new apigateway.LambdaIntegration(openaiHandler);
  chat.addMethod('POST', integration);



  }
}
