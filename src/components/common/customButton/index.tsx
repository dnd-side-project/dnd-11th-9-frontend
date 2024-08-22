import styled, { css } from '@emotion/native';
import type { Theme } from '@emotion/react';
import type { PropsWithChildren } from 'react';
import type { PressableProps } from 'react-native';

import { getSize } from '@/utils/getSize';

type Props = Partial<{
  variant: 'primary' | 'secondary';
  size: 'medium' | 'large';
}> &
  PressableProps;

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
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-width: 1px;
    border-radius: 5px;
    ${variantStyles[variant]}
    ${sizeStyles[size]}
  `;
};

const StyledButton = styled.Pressable<Props>`
  ${({ theme, variant, size }) => getButtonStyles(theme, variant, size)}
`;

export function CustomButton({
  variant = 'primary',
  size = 'medium',
  children,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <StyledButton
      variant={variant}
      size={size}
      {...rest}>
      {children}
    </StyledButton>
  );
}
