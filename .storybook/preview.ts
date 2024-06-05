import type { Preview } from "@storybook/react";
import { addons } from '@storybook/addons';
import { STORY_RENDERED } from '@storybook/core-events';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const parameters = preview.parameters;

addons.getChannel().once(STORY_RENDERED, () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (!urlParams.get('path')) {
    window.location.href = '?path=/story/welcome--default';
  }
});


