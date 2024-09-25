import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { color } from '@/styles/theme';

import QuestionnaireCheckListSkeleton from './';

const SkeletonMeta: Meta<typeof QuestionnaireCheckListSkeleton> = {
  title: 'questionnaire/QuestionnaireCheckListSkeleton',
  component: QuestionnaireCheckListSkeleton,
  parameters: {
    layout: 'centered',
  },
};

export default SkeletonMeta;

export const Primary: StoryObj<typeof QuestionnaireCheckListSkeleton> = {
  render: () => {
    return (
      <View style={{ flex: 1, backgroundColor: color.Background.Alternative, padding: 10 }}>
        <QuestionnaireCheckListSkeleton />
      </View>
    );
  },
};
