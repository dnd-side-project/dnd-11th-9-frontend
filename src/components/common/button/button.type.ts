import type Ionicons from '@expo/vector-icons/Ionicons';
import type { ComponentProps } from 'react';
import type { PressableProps } from 'react-native';

export type CustomButtonProps = {
  type: 'primary' | 'secondary';
  size: 'full' | 'large' | 'medium' | 'small';
  disabled: boolean;
};

export type ButtonProps = {
  rightIcon?: ComponentProps<typeof Ionicons>['name'];
  leftIcon?: ComponentProps<typeof Ionicons>['name'];
} & CustomButtonProps &
  PressableProps;
