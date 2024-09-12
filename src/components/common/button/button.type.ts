import type { ReactElement } from 'react';
import type { PressableProps } from 'react-native';

import type { IconProps } from '@/types';

export type CustomButtonProps = {
  type: 'primary' | 'secondary';
  size: 'large' | 'medium' | 'small' | 'full';
  disabled: boolean;
};

export type ButtonProps = {
  RightIcon?: ReactElement<IconProps>;
  LeftIcon?: ReactElement<IconProps>;
} & Partial<CustomButtonProps> &
  PressableProps;
