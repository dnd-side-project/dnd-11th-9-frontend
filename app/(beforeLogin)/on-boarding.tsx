import { router } from 'expo-router';
import { useCallback, useState } from 'react';

import Step1 from '@/funnels/on-boarding/Step1';
import Step2 from '@/funnels/on-boarding/Step2';
import Step3 from '@/funnels/on-boarding/Step3';
import { useOnboarding } from '@/store/useOnboarding';

function OnBoarding() {
  const { checkOnBoarding } = useOnboarding();
  const [step, setStep] = useState(1);

  const handleLastStep = useCallback(() => {
    checkOnBoarding();
    router.push('sign-in');
  }, [checkOnBoarding]);

  return (
    <>
      {step === 1 && (
        <Step1
          onPress={() => setStep(2)}
          onSkip={handleLastStep}
        />
      )}
      {step === 2 && (
        <Step2
          onPress={() => setStep(3)}
          onSkip={handleLastStep}
        />
      )}
      {step === 3 && (
        <Step3
          onPress={handleLastStep}
          onSkip={handleLastStep}
        />
      )}
    </>
  );
}

export default OnBoarding;
