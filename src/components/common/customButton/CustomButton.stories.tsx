import type { Meta, StoryObj } from '@storybook/react';

import { CustomButton } from './index';

const CustomButtonMeta: Meta<typeof CustomButton> = {
  title: 'common/customButton',
  component: CustomButton,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['medium', 'large'],
      },
    },
    children: { control: 'text' },
  },
  args: {
    children: 'customButton Text',
    variant: 'primary',
    size: 'medium',
  },
};

export default CustomButtonMeta;

export const PrimaryMedium: StoryObj<typeof CustomButton> = {
  name: 'Primary Medium Button',
  args: {
    variant: 'primary',
    size: 'medium',
  },
};

export const SecondaryLarge: StoryObj<typeof CustomButton> = {
  name: 'Secondary Large Button',
  args: {
    variant: 'secondary',
    size: 'large',
  },
};

export const CustomBackground: StoryObj<typeof CustomButton> = {
  name: 'Primary Background Button',
  args: {
    variant: 'primary',
    size: 'medium',
  },
};

export const LargeWithBody1: StoryObj<typeof CustomButton> = {
  name: 'Secondary Button with Body1 Typography',
  args: {
    variant: 'secondary',
    size: 'large',
  },
};
