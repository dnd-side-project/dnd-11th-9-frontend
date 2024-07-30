import { Text, type TextProps } from 'react-native';

import type { theme } from '@/styles/theme';

import { TypographyStyle as S } from './style';

type FontVariant = keyof typeof theme.typography.FONT_SIZE;

export type Props = TextProps & {
  variant?: FontVariant;
  color?: string;
};

export function Typography({
  children,
  variant = 'Body1',
  color = 'black',
  style,
  ...rest
}: Props) {
  const textStyles = [S[variant], { color }, style];
  return (
    <Text
      style={textStyles}
      {...rest}>
      {children}
    </Text>
  );
}
