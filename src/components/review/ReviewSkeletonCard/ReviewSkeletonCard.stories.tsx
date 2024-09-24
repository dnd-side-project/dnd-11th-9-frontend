import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { SCREEN_SIZE } from '@/constants';
import { color } from '@/styles/theme';

import ReviewSkeletonCard from './';

const ReviewSkeletonCardMeta: Meta<typeof ReviewSkeletonCard> = {
  title: 'review/ReviewSkeletonCard',
  component: ReviewSkeletonCard,
  argTypes: {
    projectName: {
      control: {
        type: 'text',
      },
      description: '프로젝트 이름을 입력합니다.',
    },
    startDate: {
      control: {
        type: 'text',
        description: '프로젝트 시작 날짜를 입력합니다.',
      },
    },
    endDate: {
      control: {
        type: 'text',
        description: '프로젝트 끝난 날짜를 입력합니다.',
      },
    },
  },
};

export default ReviewSkeletonCardMeta;

export const Primary: StoryObj<typeof ReviewSkeletonCard> = {
  args: {
    projectName: '프로젝트',
    startDate: '2024-07',
    endDate: '2024-10',
  },
  render: (args) => {
    return (
      <View
        style={{
          flex: 1,
          padding: 20,
          backgroundColor: color.Background.Alternative,
        }}>
        <View
          style={{
            width: SCREEN_SIZE.Web,
            marginHorizontal: 'auto',
          }}>
          <ReviewSkeletonCard {...args} />
        </View>
      </View>
    );
  },
};
