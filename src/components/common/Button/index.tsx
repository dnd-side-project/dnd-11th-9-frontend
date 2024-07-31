import styled, { css } from '@emotion/native';
import type { Theme } from '@emotion/react';
import type { PropsWithChildren } from 'react';
import type { PressableProps } from 'react-native';

import { Typography } from '@/components/common/Typography';
import type { theme } from '@/styles/theme';
import { getSize } from '@/utils/get-size';

type Props = {
  variant?: 'primary' | 'secondary';
  size?: 'medium' | 'large';
  typoVariant?: Extract<keyof typeof theme.typography.FONT_SIZE, 'Body1' | 'Body2' | 'Body3'>;
} & PressableProps;

const getButtonStyles = (
  theme: Theme,
  variant: Props['variant'] = 'primary',
  size: Props['size'] = 'medium'
) => {
  const variantStyles = {
    primary: css({
      backgroundColor: theme.color.WHITE,
      borderColor: theme.color.BLACK,
    }),
    secondary: css({
      backgroundColor: theme.color.WHITE,
      borderColor: 'transparent',
    }),
  };

  const sizeStyles = {
    medium: css({
      width: '50%',
      paddingVertical: getSize.deviceHeight > 700 ? 15 : 10,
    }),
    large: css({
      width: '100%',
      paddingVertical: getSize.deviceHeight > 700 ? 12 : 8,
    }),
  };

  return css`
    padding: 10px;
    border-radius: 5px;
    border-width: 1px;
    align-items: center;
    justify-content: center;
    ${variantStyles[variant]}
    ${sizeStyles[size]}
  `;
};

const StyledButton = styled.Pressable<Omit<Props, 'typoVariant'>>`
  ${({ theme, variant, size }) => getButtonStyles(theme, variant, size)}
`;

export function CustomButton({
  variant = 'primary',
  size = 'medium',
  typoVariant = 'Body1',
  children,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <StyledButton
      variant={variant}
      size={size}
      {...rest}>
      <Typography variant={typoVariant}>{children}</Typography>
    </StyledButton>
  );
}
