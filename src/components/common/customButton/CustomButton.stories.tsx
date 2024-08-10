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
    typoVariant: {
      control: {
        type: 'select',
        options: ['Body1', 'Body2', 'Body3'],
      },
    },
    children: { control: 'text' },
  },
  args: {
    children: 'customButton Text',
    variant: 'primary',
    size: 'medium',
    typoVariant: 'Body1',
  },
};

export default CustomButtonMeta;

export const PrimaryMedium: StoryObj<typeof CustomButton> = {
  name: 'Primary Medium Button',
  args: {
    variant: 'primary',
    size: 'medium',
    typoVariant: 'Body1',
  },
};

export const SecondaryLarge: StoryObj<typeof CustomButton> = {
  name: 'Secondary Large Button',
  args: {
    variant: 'secondary',
    size: 'large',
    typoVariant: 'Body2',
  },
};

export const CustomBackground: StoryObj<typeof CustomButton> = {
  name: 'Primary Background Button',
  args: {
    variant: 'primary',
    size: 'medium',
    typoVariant: 'Body3',
  },
};

export const LargeWithBody1: StoryObj<typeof CustomButton> = {
  name: 'Secondary Button with Body1 Typography',
  args: {
    variant: 'secondary',
    size: 'large',
    typoVariant: 'Body1',
  },
};
