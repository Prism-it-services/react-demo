import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
//import * as lambda from 'aws-cdk-lib/aws-lambda'
// import * as sqs from 'aws-cdk-lib/aws-sqs';

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



  }
}
