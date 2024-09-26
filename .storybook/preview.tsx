import type { Preview } from '@storybook/react';
import Provider from '../src/components/common/provider';
import { useAppOpen } from '../src/hooks';

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
      useAppOpen();
      return (
        <Provider>
          <Story />
        </Provider>
      );
    },
  ],
};

export default preview;
