import { useCallback, useState } from 'react';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

import SolidButton from '@/components/common/button/SolidButton';
import ProgressBar from '@/components/common/progress-bar';
import Typography from '@/components/common/typography';
import OnboardingSection from '@/components/onboarding/OnboardingSection';
import OnboardingTitle, { ON_BOARDING } from '@/components/onboarding/OnboardingTitle';
import { getSize } from '@/utils';

import * as S from './style';

type Props = {
  handleLastStep: () => void;
};

function OnboardingScreen({ handleLastStep }: Props) {
  const [step, setStep] = useState(0);

  const handleStep = useCallback(() => {
    if (step === ON_BOARDING.length - 1) {
      return handleLastStep();
    }
    setStep((prevStep) => prevStep + 1);
  }, [step]);

  const backgroundStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    flex: 1,
    width: getSize.deviceWidth * ON_BOARDING.length,
    height: '100%',
    left: withTiming(step * -getSize.deviceWidth),
  }));

  return (
    <S.Container>
      <Animated.Image
        source={require('../../../../assets/images/onboarding-bg.png')}
        style={backgroundStyle}
      />
      <S.OnBoardingWrapper>
        <OnboardingTitle step={step} />
        <S.ContentWrapperBox>
          <OnboardingSection step={step} />
        </S.ContentWrapperBox>
      </S.OnBoardingWrapper>
      <S.ButtonBox>
        <ProgressBar
          currentStep={step}
          stepLength={ON_BOARDING.length}
        />
        <SolidButton
          size='large'
          full
          onPress={handleStep}>
          다음
        </SolidButton>
        <S.SkipButton onPress={handleLastStep}>
          <Typography
            variant='Body1/Normal'
            color='#878A93'>
            건너뛰기
          </Typography>
        </S.SkipButton>
      </S.ButtonBox>
    </S.Container>
  );
}

export default OnboardingScreen;
