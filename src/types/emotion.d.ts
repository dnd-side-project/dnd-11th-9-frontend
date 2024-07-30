import '@emotion/react';

import type { CustomTheme } from '@/src/styles/theme';

declare module '@emotion/react' {
  export type Theme = CustomTheme;
}
