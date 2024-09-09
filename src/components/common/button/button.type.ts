import type { ReactElement } from 'react';
import type { PressableProps } from 'react-native';

import type { IconProps } from '@/types';

export type CustomButtonProps = {
  type: 'primary' | 'secondary';
  size: 'full' | 'large' | 'medium' | 'small';
  disabled: boolean;
};

export type ButtonProps = {
  RightIcon?: ReactElement<IconProps>;
  LeftIcon?: ReactElement<IconProps>;
} & Partial<CustomButtonProps> &
  PressableProps;
