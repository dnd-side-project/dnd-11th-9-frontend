import { router } from 'expo-router';
import { useCallback, useState } from 'react';

import PrimaryButton from '@/components/common/button/primaryButton';
import ProgressBar from '@/components/common/progress-bar';
import Typography from '@/components/common/typography';
import { ON_BOARDING } from '@/constants';
import { useOnboarding } from '@/store/useOnboarding';

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
    router.push('sign-in');
  }, [checkOnBoarding]);

  return (
    <S.Container>
      <S.OnBoardingWrapper>
        {ON_BOARDING.map(({ heading, title }, index) => {
          return step === index ? (
            <S.ContentBox key={index}>
              <S.TextWrapper>
                <Typography
                  variant='Heading1'
                  color='#878A93'>
                  {title}
                </Typography>
                <Typography variant='Title3'>{heading}</Typography>
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
        <PrimaryButton onPress={handleStep}>다음</PrimaryButton>
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
