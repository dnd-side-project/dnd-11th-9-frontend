import { router } from 'expo-router';
import { useCallback, useState } from 'react';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

import SolidButton from '@/components/common/button/SolidButton';
import ProgressBar from '@/components/common/progress-bar';
import Typography from '@/components/common/typography';
import { ON_BOARDING } from '@/constants';
import { useOnboarding } from '@/store/useOnboarding';
import { color } from '@/styles/theme';
import { getSize } from '@/utils';

import * as S from './onboarding.styles';

function Onboarding() {
  const { checkOnBoarding } = useOnboarding();
  const [step, setStep] = useState(0);

  const handleStep = () => {
    if (step === ON_BOARDING.length - 1) {
      return handleLastStep();
    }
    setStep((prevStep) => prevStep + 1);
  };

  const handleLastStep = useCallback(() => {
    checkOnBoarding();
    router.replace('sign-in');
  }, [checkOnBoarding]);

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
        source={require('../../assets/images/onboarding-bg.png')}
        style={backgroundStyle}
      />
      <S.OnBoardingWrapper>
        {ON_BOARDING.map(({ heading, title }, index) => {
          return step === index ? (
            <S.ContentBox key={index}>
              <S.TextWrapper>
                <Typography
                  variant='Heading1'
                  color={color.Label.Alternative}>
                  {title}
                </Typography>
                <Typography
                  color={color.Label.Normal}
                  variant='Title3'>
                  {heading}
                </Typography>
              </S.TextWrapper>
            </S.ContentBox>
          ) : null;
        })}
        <ProgressBar
          currentStep={step}
          stepLength={ON_BOARDING.length}
        />
      </S.OnBoardingWrapper>
      <S.ButtonBox>
        <SolidButton onPress={handleStep}>다음</SolidButton>
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

export default Onboarding;
