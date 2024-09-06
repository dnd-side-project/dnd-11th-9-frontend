import type { Meta, StoryObj } from '@storybook/react';

import { IonicIcon } from '@/components/common/icon/IonicIcon';

const IonicIconMeta: Meta<typeof IonicIcon> = {
  title: 'common/icon/IonicIcon',
  component: IonicIcon,
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

export default IonicIconMeta;

export const Basic: StoryObj<typeof IonicIcon> = {
  args: {
    name: 'home',
  },
};

export const CustomColor: StoryObj<typeof IonicIcon> = {
  args: {
    name: 'home',
    color: 'blue',
  },
};

export const CustomSize: StoryObj<typeof IonicIcon> = {
  args: {
    name: 'home',
    size: 40,
  },
};

export const DifferentIcon: StoryObj<typeof IonicIcon> = {
  args: {
    name: 'settings',
  },
};
