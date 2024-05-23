// src/stories/Welcome.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Welcome',
} as Meta;

const Template: StoryFn = () => (
  <div>
    <h1>Welcome to Arun's Storybook</h1>
    <p>Explore the components and see how they work.</p>
  </div>
);

export const Default = Template.bind({});
