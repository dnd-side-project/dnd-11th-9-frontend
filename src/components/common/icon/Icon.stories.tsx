import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './index';

const IconMeta: Meta<typeof Icon> = {
  title: 'common/icon',
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: ['home', 'settings', 'person', 'search', 'camera'],
      },
    },
    color: { control: 'color' },
    size: { control: { type: 'number', min: 10, max: 100 } },
  },
  args: {
    name: 'home',
    color: 'black',
    size: 28,
  },
};

export default IconMeta;

export const Basic: StoryObj<typeof Icon> = {
  args: {
    name: 'home',
  },
};

export const CustomColor: StoryObj<typeof Icon> = {
  args: {
    name: 'home',
    color: 'blue',
  },
};

export const CustomSize: StoryObj<typeof Icon> = {
  args: {
    name: 'home',
    size: 40,
  },
};

export const DifferentIcon: StoryObj<typeof Icon> = {
  args: {
    name: 'settings',
  },
};
