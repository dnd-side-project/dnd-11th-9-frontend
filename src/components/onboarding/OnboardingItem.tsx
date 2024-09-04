import { View } from 'react-native';
import Animated, { FadeOutLeft } from 'react-native-reanimated';

import Typography from '@/components/common/typography';
import { useOnboarding } from '@/store/useOnboarding';
import type { PropsNeedChildren } from '@/types';

import * as S from '../../../app/(beforeLogin)/onboarding.styles';

type Props = {
  heading: string;
  title: string;
  stepLength: number;
  currentStep: number;
};

function OnboardingContainer({ children }: PropsNeedChildren) {
  const { showOnBoarding } = useOnboarding();
  if (showOnBoarding) return <View style={{ flex: 1 }}>{children}</View>;

  return (
    <Animated.View
      style={{ flex: 1 }}
      exiting={FadeOutLeft.duration(500)}>
      {children}
    </Animated.View>
  );
}

function OnboardingContent({ title, heading, stepLength, currentStep }: Props) {
  return (
    <S.ContentBox>
      <S.TextWrapper>
        <Typography
          variant='Heading1'
          color='#878A93'>
          {title}
        </Typography>
        <Typography variant='Title3'>{heading}</Typography>
        <S.ProgressBar>
          {Array.from({ length: stepLength }, (_, index) => {
            return index === currentStep ? (
              <S.StepActive key={index} />
            ) : (
              <S.StepInactive key={index} />
            );
          })}
        </S.ProgressBar>
      </S.TextWrapper>
    </S.ContentBox>
  );
}

const OnboardingItem = Object.assign(OnboardingContainer, {
  Content: OnboardingContent,
});

export default OnboardingItem;
