import { useRouter } from 'expo-router';
import { createContext, type PropsWithChildren, useContext } from 'react';

import { STORAGE_KEYS } from '@/constants';
import { useStorageState } from '@/hooks/useStorageState';
import { useOnboarding } from '@/store/useOnboarding';

const AuthContext = createContext<{
  signIn: (refreshToken?: string | null) => void;
  signOut: () => void;
  refreshToken?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  refreshToken: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error(
        'useSession 을 사용하기 위해서는 <SessionProvider /> 로 감싸져 있어야 합니다.'
      );
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, refreshToken], setSession] = useStorageState(STORAGE_KEYS.SESSION);
  const router = useRouter();
  const { resetOnBoarding } = useOnboarding();

  return (
    <AuthContext.Provider
      value={{
        signIn: (refreshToken = null) => {
          if (refreshToken !== null) {
            router.push('/');
          }
          setSession(refreshToken);
          router.push('/');
        },
        signOut: () => {
          setSession(null);
          resetOnBoarding();
        },
        refreshToken,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
