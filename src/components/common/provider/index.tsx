import { ThemeProvider } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';

import queryClient from '@/apis/queryClient';
import { theme } from '@/styles/theme';
import type { PropsNeedChildren } from '@/types';

const Provider = ({ children }: PropsNeedChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

export default Provider;
