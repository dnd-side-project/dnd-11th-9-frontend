import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pressable, View } from 'react-native';

import ProgressBar from '@/components/common/progress-bar';
import Typography from '@/components/common/typography';

const StepBarMeta: Meta<typeof ProgressBar> = {
  title: 'common/StepBar',
  component: ProgressBar,
  argTypes: {
    currentStep: {
      control: {
        type: 'number',
      },
      description: '현재 단계를 설정합니다.',
    },
    stepLength: {
      control: {
        type: 'number',
      },
      description: '스탭의 길이를 설정합니다.',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default StepBarMeta;

export const Basic: StoryObj<typeof ProgressBar> = {
  args: {
    stepLength: 4,
    currentStep: 1,
  },
  decorators: [],
  render: (props) => {
    {
      const [currentStep, setCurrentStep] = useState(() => props.currentStep);

      const incrementStep = () => {
        setCurrentStep((prev) => {
          if (prev === props.stepLength - 1) return prev;
          return prev + 1;
        });
      };

      const decrementStep = () => {
        setCurrentStep((prev) => {
          if (prev === 0) return prev;
          return prev - 1;
        });
      };

      return (
        <View style={{ display: 'flex', gap: 12, width: '100%' }}>
          <ProgressBar
            style={{ justifyContent: 'center' }}
            currentStep={currentStep}
            stepLength={props.stepLength}
          />
          <View style={{ display: 'flex', flexDirection: 'row', gap: 16 }}>
            <Pressable onPress={incrementStep}>
              <Typography>다음 스텝</Typography>
            </Pressable>
            <Pressable onPress={decrementStep}>
              <Typography>이전 스텝</Typography>
            </Pressable>
          </View>
        </View>
      );
    }
  },
};
