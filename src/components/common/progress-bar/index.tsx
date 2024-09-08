import styled from '@emotion/native';
import { memo } from 'react';
import type { ViewProps } from 'react-native';
import Animated, { LinearTransition, useAnimatedStyle, withTiming } from 'react-native-reanimated';

type StepBarProps = {
  isActive: boolean;
};

function StepBar({ isActive }: StepBarProps) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      marginVertical: 'auto',
      marginHorizontal: 0,
      width: 6,
      height: withTiming(isActive ? 16 : 6),
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
  display: flex;
  flex-direction: row;
  gap: 6px;
  height: 16px;
`;

export default memo(ProgressBar);
