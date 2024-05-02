#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SArunStack } from '../lib/sarun-stack';
import { ArunPipelineStack} from '../devops-ci-cd/pipeline-stack';

const app = new cdk.App();

new SArunStack(app, 'SArunStack', {

  env: { account: '595306352527', region: 'us-east-1' },

 
});

new ArunPipelineStack(app, 'ArunPipelineStack', {
  /* You can specify the same or a different environment for this stack */
  env: { account: '595306352527', region: 'us-east-1' },
});

