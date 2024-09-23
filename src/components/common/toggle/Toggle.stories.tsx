import type { Meta, StoryObj } from '@storybook/react';

import Toggle from './';

const ToggleMeta: Meta<typeof Toggle> = {
  title: 'common/Toggle',
  component: Toggle,
  argTypes: {
    isOn: {
      control: {
        type: 'boolean',
      },
      description: '토글 상태를 설정합니다.',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: '비활성화 여부를 설정합니다.',
    },
    onToggle: {
      action: 'clicked',
      description: '토글 상태가 변경될 때 호출되는 콜백 함수입니다.',
    },
  },
};

export default ToggleMeta;

export const Default: StoryObj<typeof Toggle> = {
  args: {
    isOn: true,
    disabled: false,
    onToggle: () => {},
  },
  render: (args) => <Toggle {...args} />,
};

export const Off: StoryObj<typeof Toggle> = {
  args: {
    isOn: false,
    disabled: false,
    onToggle: () => {},
  },
  render: (args) => <Toggle {...args} />,
};

export const Disabled: StoryObj<typeof Toggle> = {
  args: {
    disabled: true,
    onToggle: () => {},
  },
  render: (args) => <Toggle {...args} />,
};
