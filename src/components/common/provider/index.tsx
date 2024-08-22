import { ThemeProvider } from '@emotion/react';

import { useAppOpen } from '@/hooks';
import { theme } from '@/styles/theme';
import type { PropsNeedChildren } from '@/types';

const Provider = ({ children }: PropsNeedChildren) => {
  const loaded = useAppOpen();

  if (!loaded) {
    return null;
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
