import type { Preview } from '@storybook/react';
import Provider from '../src/components/common/provider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Provider>
          <Story />
        </Provider>
      );
    },
  ],
};

export default preview;
