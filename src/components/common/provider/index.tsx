import { ThemeProvider } from '@emotion/react';
import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';

import { QueryProvider } from '@/components/common/provider/query-provider';
import { SessionProvider } from '@/components/common/provider/session-provider';
import { enableMocking } from '@/libs';
import { theme } from '@/styles/theme';

export function Provider({ children }: PropsWithChildren) {
  useEffect(() => {
    if (process.env.EXPO_PUBLIC_MOCKING_ENABLED === 'ENABLED') enableMocking();
  }, []);

  return (
    <QueryProvider>
      <SessionProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </SessionProvider>
    </QueryProvider>
  );
}
