import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as codepipeline_actions from 'aws-cdk-lib/aws-codepipeline-actions';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';

export class ArunPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

  
    const sourceOutput = new codepipeline.Artifact();
    const sourceAction = new codepipeline_actions.GitHubSourceAction({
      actionName: 'GitHub',
      owner: 'arun-prism',
      repo: 'react-demo',
      oauthToken: cdk.SecretValue.secretsManager("github-token"),
      output: sourceOutput,
      branch: 'main', // default: 'master'
    });

    
    const buildProject = new codebuild.PipelineProject(this, 'MyBuildProject', {
      environment: {
        buildImage: codebuild.LinuxBuildImage.STANDARD_5_0,
      },
    });

    const buildAction = new codepipeline_actions.CodeBuildAction({
      actionName: 'CodeBuild',
      project: buildProject,
      input: sourceOutput,
      outputs: [new codepipeline.Artifact()], // optional
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
      
      ],
    });



    
  }
}
