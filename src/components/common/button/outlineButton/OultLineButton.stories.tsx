import type { Meta, StoryObj } from '@storybook/react';

import OutLineButton from '@/components/common/button/outlineButton/index';

const OutLineButtonMeta: Meta<typeof OutLineButton> = {
  title: 'common/Button/OutLineButton',
  component: OutLineButton,
  argTypes: {
    children: { controls: 'text' },
  },
  args: {
    children: '버튼',
  },
};

export default OutLineButtonMeta;

export const CreateProjectButton: StoryObj<typeof OutLineButton> = {
  name: '프로젝트 등록하기 버튼',
  args: {
    children: '프로젝트 등록하기',
    width: 180,
  },
};

export const FullSize: StoryObj<typeof OutLineButton> = {
  name: '가로 폭에 맞춘 버튼',
  args: {
    width: '100%',
  },
};

export const HalfSize: StoryObj<typeof OutLineButton> = {
  name: '가로 폭의 50%인 버튼',
  args: {
    width: '50%',
  },
};
