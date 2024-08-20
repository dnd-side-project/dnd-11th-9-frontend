import type { ReactNode } from 'react';

export type PropsNeedChildren<P = unknown> = P & { children: ReactNode };
