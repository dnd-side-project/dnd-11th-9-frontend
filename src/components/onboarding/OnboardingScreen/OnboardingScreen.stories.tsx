import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { SCREEN_SIZE } from '@/constants';

import OnboardingScreen from './';

const ProjectInviteModalMeta: Meta<typeof OnboardingScreen> = {
  title: 'screens/Onboarding',
  component: OnboardingScreen,
  argTypes: {
    handleLastStep: {
      action: '마지막 페이지로 이동합니다.',
      description: '마지막 페이지로 이동될 때 실행되는 함수',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default ProjectInviteModalMeta;

export const Preview: StoryObj<typeof OnboardingScreen> = {
  args: {
    handleLastStep: () => {
      console.log('마지막 페이지로 이동합니다.');
    },
  },
  render: (args) => {
    return (
      <View style={{ flex: 1, width: SCREEN_SIZE.WEB_WIDTH, height: SCREEN_SIZE.WEB_HEIGHT }}>
        <OnboardingScreen {...args} />
      </View>
    );
  },
};
