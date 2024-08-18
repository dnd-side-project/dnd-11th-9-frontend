import { ThemeProvider } from '@emotion/react';

import { theme } from '@/styles/theme';
import type { PropsNeedChildren } from '@/types';

const Provider = ({ children }: PropsNeedChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
