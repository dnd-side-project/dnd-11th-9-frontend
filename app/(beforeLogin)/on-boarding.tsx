import { router } from 'expo-router';
import { useCallback, useState } from 'react';

import PrimaryButton from '@/components/common/button/primaryButton';
import Typography from '@/components/common/typography';
import OnboardingItem from '@/components/on-boarding/OnboardingItem';
import { ON_BOARDING } from '@/constants';
import { useOnboarding } from '@/store/useOnboarding';

import * as S from './on-boarding.styles';

function OnBoarding() {
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
      {ON_BOARDING.map(({ heading, title }, index) => {
        return step === index ? (
          <OnboardingItem key={index}>
            <OnboardingItem.Content
              heading={heading}
              title={title}
              stepLength={ON_BOARDING.length}
              currentStep={index}
            />
          </OnboardingItem>
        ) : null;
      })}
      <S.StepBox>
        <PrimaryButton onPress={handleStep}>다음</PrimaryButton>
        <S.SkipButton onPress={handleLastStep}>
          <Typography
            variant='Body1/Normal'
            color='#878A93'>
            건너뛰기
          </Typography>
        </S.SkipButton>
      </S.StepBox>
    </S.Container>
  );
}

export default OnBoarding;
