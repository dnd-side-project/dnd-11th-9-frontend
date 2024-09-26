import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { color } from '@/styles/theme';

import BusinessCard from './';

const SkeletonMeta: Meta<typeof BusinessCard> = {
  title: 'home/BusinessCard',
  component: BusinessCard,
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
      description: '이름을 입력해주세요',
    },
    review: {
      control: {
        type: 'text',
      },
      description: '리뷰를 입력해주세요',
    },
    projectName: {
      control: {
        type: 'text',
      },
      description: '프로젝트 이름을 입력해주세요',
    },
    isActive: {
      control: {
        type: 'boolean',
      },
      description: '스크린에 보이는지 여부를 입력해주세요',
    },
    onboarding: {
      control: {
        type: 'boolean',
      },
      description: '온보딩 화면인지 여부를 입력해주세요',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default SkeletonMeta;

export const Primary: StoryObj<typeof BusinessCard> = {
  args: {
    review: '문제를 척척 해결하는\n' + '책임감 넘치는 슈퍼히어로',
    projectName: 'wepro',
    name: '김프로',
  },
  render: (args) => {
    return (
      <View style={{ flex: 1, backgroundColor: color.Background.Alternative, padding: 100 }}>
        <BusinessCard {...args} />
      </View>
    );
  },
};
