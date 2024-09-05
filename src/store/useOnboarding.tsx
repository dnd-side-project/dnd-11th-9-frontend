import { createContext, useContext } from 'react';

import { STORAGE_KEYS } from '@/constants';
import { useStorageState } from '@/hooks/useStorageState';
import type { PropsNeedChildren } from '@/types';

const OnboardingContext = createContext<{
  checkOnBoarding: () => void;
  resetOnBoarding: () => void;
  showOnBoarding?: string | null;
  isLoading: boolean;
}>({
  checkOnBoarding: () => null,
  resetOnBoarding: () => null,
  showOnBoarding: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useOnboarding() {
  const value = useContext(OnboardingContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error(
        'useSession 을 사용하기 위해서는 <OnboardingProvider /> 로 감싸져 있어야 합니다.'
      );
    }
  }

  return value;
}

export function OnboardingProvider({ children }: PropsNeedChildren) {
  const [[isLoading, showOnBoarding], setSession] = useStorageState(STORAGE_KEYS.ON_BOARDING);

  return (
    <OnboardingContext.Provider
      value={{
        checkOnBoarding: () => {
          setSession('checked');
        },
        resetOnBoarding: () => {
          setSession(null);
        },
        showOnBoarding,
        isLoading,
      }}>
      {children}
    </OnboardingContext.Provider>
  );
}
