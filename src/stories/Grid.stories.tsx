import React from 'react';
import { Meta, StoryFn} from '@storybook/react';
import { Grid, GridProps } from '../components/Grid/Grid';

export default {
    title : 'Example/Grid',
    component : Grid,
    argTypes: {
        columns: { control: { type: 'number', min: 1, max: 12 } },
      },

      parameters: {
        docs: {
          description: {
            component: 'Grid component for displaying items in a responsive grid layout.',
          },
          source: {
            type: 'code',
          },
        },
      },
} as Meta;

const Template: StoryFn<GridProps> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: 3,
};
