import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as codepipeline_actions from 'aws-cdk-lib/aws-codepipeline-actions';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class ArunPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

  const websiteBucket = s3.Bucket.fromBucketName(this, 'websiteBucket', 'prismitservicesltd.com')
    const sourceOutput = new codepipeline.Artifact();
    const sourceAction = new codepipeline_actions.GitHubSourceAction({
      actionName: 'GitHub',
      owner: 'arun-prism',
      repo: 'react-demo',
      oauthToken: cdk.SecretValue.secretsManager("github-token"),
      output: sourceOutput,
      branch: 'main', 
    });

    
    const buildProject = new codebuild.PipelineProject(this, 'MyBuildProject', {
      environment: {
        buildImage: codebuild.LinuxBuildImage.STANDARD_5_0,
      },
    });

    const buildOutput = new codepipeline.Artifact();

    const buildAction = new codepipeline_actions.CodeBuildAction({
      actionName: 'CodeBuild',
      project: buildProject,
      input: sourceOutput,
      outputs: [buildOutput], 
    });

    const manualApprovalAction = new codepipeline_actions.ManualApprovalAction({
      actionName: 'ManualApproval',
      runOrder: 1,
    });
    
    const deployAction = new codepipeline_actions.S3DeployAction({
      actionName: 'S3Deploy',
      bucket: websiteBucket,
      input: buildOutput,
      runOrder: 2,
    });

    new codepipeline.Pipeline(this, 'ArunPipeline', {
      pipelineName: 'ArunAppPipeline',
      stages: [
        {
          stageName: 'Source',
          actions: [sourceAction],
        },
        {
          stageName: 'Build',
          actions: [buildAction],
        },

        {
          stageName: 'Approve',
          actions: [manualApprovalAction],
        },
        {
          stageName: 'Deploy',
          actions: [deployAction],
        },
      
      ],
    });



    
  }
}
