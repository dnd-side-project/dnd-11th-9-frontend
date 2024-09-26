import { router } from 'expo-router';
import { useCallback } from 'react';

import OnboardingScreen from '@/components/onboarding/OnboardingScreen';
import { useOnboarding } from '@/store/useOnboarding';

function Onboarding() {
  const { checkOnBoarding } = useOnboarding();

  const handleLastStep = useCallback(() => {
    checkOnBoarding();
    router.replace('sign-in');
  }, [checkOnBoarding]);

  return <OnboardingScreen handleLastStep={handleLastStep} />;
}

export default Onboarding;
