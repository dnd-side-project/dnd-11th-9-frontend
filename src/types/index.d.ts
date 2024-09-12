import type { ReactNode } from 'react';

export type PropsNeedChildren<P = unknown> = P & { children: ReactNode };

export type IconProps = {
  style: {
    width: number;
    height: number;
  };
  size?: number;
  color?: string;
  fill?: string;
};
