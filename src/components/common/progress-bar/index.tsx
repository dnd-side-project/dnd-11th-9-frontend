import styled from '@emotion/native';
import { memo } from 'react';
import type { ViewProps } from 'react-native';
import Animated, { LinearTransition, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { flexDirectionRowItemsCenter } from '@/styles/common';

type StepBarProps = {
  isActive: boolean;
};

function StepBar({ isActive }: StepBarProps) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      marginVertical: 'auto',
      marginHorizontal: 0,
      width: withTiming(isActive ? 16 : 6),
      height: 6,
      backgroundColor: withTiming(isActive ? '#000' : '#00000026', { duration: 500 }),
      borderRadius: 30,
      alignSelf: 'flex-start',
    };
  });

  return (
    <Animated.View
      layout={LinearTransition}
      style={animatedStyle}
    />
  );
}

type Props = {
  currentStep: number;
  stepLength: number;
} & ViewProps;

function ProgressBar({ currentStep, stepLength, ...rest }: Props) {
  return (
    <Container {...rest}>
      {Array.from({ length: stepLength }, (_, index) => {
        return (
          <StepBar
            key={index}
            isActive={index === currentStep}
          />
        );
      })}
    </Container>
  );
}

export const Container = styled.View`
  ${flexDirectionRowItemsCenter};
  gap: 6px;
  height: 16px;
  margin: 0 auto 22px;
`;

export default memo(ProgressBar);
