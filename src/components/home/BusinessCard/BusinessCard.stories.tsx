import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { color } from '@/styles/theme';

import BusinessCard from './';

const SkeletonMeta: Meta<typeof BusinessCard> = {
  title: 'home/BusinessCard',
  component: BusinessCard,
  parameters: {
    layout: 'centered',
  },
};

export default SkeletonMeta;

export const Primary: StoryObj<typeof BusinessCard> = {
  render: () => {
    return (
      <View style={{ flex: 1, backgroundColor: color.Background.Alternative, padding: 100 }}>
        <BusinessCard
          review={'문제를 척척 해결하는\n' + '책임감 넘치는 슈퍼히어로'}
          projectName='wepro'
          name='김프로'
        />
      </View>
    );
  },
};
