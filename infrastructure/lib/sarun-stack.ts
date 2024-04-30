import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as appsync from 'aws-cdk-lib/aws-appsync'
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SArunStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

  const userApi = new appsync.GraphqlApi(this, 'user-form-post-api', {

    name: 'api-to-persist-user-information',
    schema: appsync.SchemaFile.fromAsset('schema/schema.graphql'),
  });

  new cdk.CfnOutput(this, "GraphQLAPIURL", {
    value: userApi.graphqlUrl
  });


  new cdk.CfnOutput(this, "GraphQLAPIKey", {
    value: userApi.apiKey || ''
  });

 
  new cdk.CfnOutput(this, "Stack Region", {
    value: this.region
  });

  }
}
