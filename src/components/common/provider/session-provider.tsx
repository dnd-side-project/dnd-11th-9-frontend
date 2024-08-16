import type { PropsWithChildren } from 'react';

import { STORAGE_KEYS } from '@/constants';
import { useStorageState } from '@/hooks/useStorageState';
import { AuthContext } from '@/store/useSession';

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState(STORAGE_KEYS.SESSION);

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          // Perform sign-in logic here
          setSession('xxx');
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
