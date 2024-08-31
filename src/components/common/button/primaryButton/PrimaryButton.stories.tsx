import type { Meta, StoryObj } from '@storybook/react';

import PrimaryButton from '@/components/common/button/primaryButton/index';

const PrimaryButtonMeta: Meta<typeof PrimaryButton> = {
  title: 'common/Button/PrimaryButton',
  component: PrimaryButton,
  argTypes: {
    status: {
      controls: {
        type: 'select',
        options: ['active', 'disabled'],
      },
    },
    width: {
      controls: {
        type: 'number',
      },
    },
    height: {
      controls: {
        type: 'number',
      },
    },
    children: { controls: 'text' },
  },
  args: {
    children: '버튼',
    status: 'active',
  },
};

export default PrimaryButtonMeta;

export const FullSize: StoryObj<typeof PrimaryButton> = {
  name: '가로 폭에 맞춘 버튼',
  args: {
    status: 'active',
    width: '100%',
  },
};

export const HalfSize: StoryObj<typeof PrimaryButton> = {
  name: '가로 폭의 50%인 버튼',
  args: {
    status: 'active',
    width: '50%',
  },
};

export const DisabledButton: StoryObj<typeof PrimaryButton> = {
  name: '제한된 버튼',
  args: {
    status: 'disabled',
    width: '100%',
  },
};
