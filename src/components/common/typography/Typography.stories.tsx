import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './index';

const CustomTextMeta: Meta<typeof Typography> = {
  title: 'common/typography',
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'H1',
          'H2',
          'H3',
          'Subtitle1',
          'Subtitle2',
          'Subtitle3',
          'Body1',
          'Body2',
          'Body3',
        ],
      },
    },
    children: { control: 'text' },
  },
  args: {
    children: 'Hello world',
    variant: 'Body1',
    color: 'black',
  },
};

export default CustomTextMeta;

export const Basic: StoryObj<typeof Typography> = {
  args: {
    variant: 'Body1',
    color: 'black',
  },
};

export const H1Example: StoryObj<typeof Typography> = {
  args: {
    children: 'Heading 1',
    variant: 'H1',
    color: 'black',
  },
};

export const Subtitle1Example: StoryObj<typeof Typography> = {
  args: {
    children: 'Subtitle 1',
    variant: 'Subtitle1',
    color: 'black',
  },
};

export const CustomColorExample: StoryObj<typeof Typography> = {
  args: {
    children: 'Custom Color',
    variant: 'Body1',
    color: 'blue',
  },
};

export const AnotherExample: StoryObj<typeof Typography> = {
  args: {
    children: 'Another example',
    variant: 'Body1',
    color: 'black',
  },
};
