import path from 'path';

/** @type{import("@storybook/react-webpack5").StorybookConfig} */
module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-react-native-web',
  ],
  webpackFinal: async (config: any) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src/'),
      };
    }

    return config;
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  staticDir: ['../assets'],
};
