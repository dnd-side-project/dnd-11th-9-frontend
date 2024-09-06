import type { Meta, StoryObj } from '@storybook/react';

import TextButton from '@/components/common/button/TextButton';

const PrimaryButtonMeta: Meta<typeof TextButton> = {
  title: 'common/Button/TextButton',
  component: TextButton,
  argTypes: {
    children: { controls: 'text', description: '버튼내 텍스트를 입력합니다.' },
    type: {
      description: '버튼의 색깔을 결정짓는 타입을 결정합니다.',
    },
    size: {
      description: '버튼의 사이즈를 결정합니다.',
      control: {
        type: 'select',
        options: ['full', 'large', 'medium', 'small'],
      },
    },
    disabled: {
      description: '버튼의 비활성화 여부를 결정합니다.',
      control: {
        type: 'boolean',
      },
    },
    leftIcon: {
      description: '왼쪽 아이콘을 설정합니다.',
    },
    rightIcon: {
      description: '오른쪽 아이콘을 설정합니다.',
    },
  },
  args: {
    children: '버튼',
    type: 'primary',
    size: 'full',
    disabled: false,
  },
};

export default PrimaryButtonMeta;

export const Primary: StoryObj<typeof TextButton> = {};
