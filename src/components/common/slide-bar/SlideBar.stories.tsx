import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import SlideBar from './';

const SlideBarMeta: Meta<typeof SlideBar> = {
  title: 'common/SlideBar',
  component: SlideBar,
  argTypes: {
    max_value: {
      control: {
        type: 'number',
      },
      description: '최대값을 설정합니다.',
    },
    current_value: {
      control: {
        type: 'number',
      },
      description: '현재값을 설정합니다.',
    },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <View style={{ width: 300 }}>
          <Story />
        </View>
      );
    },
  ],
};

export default SlideBarMeta;

export const Primary: StoryObj<typeof SlideBar> = {
  args: {
    current_value: 2,
    max_value: 5,
  },
};
