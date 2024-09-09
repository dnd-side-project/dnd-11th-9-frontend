import type { ReactNativeStyle } from '@emotion/native';
import styled, { css } from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';
import { cloneElement } from 'react';

import type { ButtonProps, CustomButtonProps } from '@/components/common/button/button.type';
import Typography from '@/components/common/typography';
import { useButtonStyle } from '@/hooks/useButtonStyle';
import { color } from '@/styles/theme';
import type { PropsNeedChildren } from '@/types';

import * as S from './Button.style';

const typeStyle: Record<CustomButtonProps['type'], ReactNativeStyle> = {
  primary: css(),
  secondary: css`
    background-color: ${color.Primary.Normal};
  `,
};

const sizeStyle: Record<CustomButtonProps['size'], ReactNativeStyle> = {
  full: css`
    width: 100%;
    height: 48px;
  `,
  large: css`
    width: fit-content;
    height: 48px;
  `,
  medium: css`
    width: fit-content;
    height: 40px;
  `,
  small: css`
    width: fit-content;
    height: 32px;
  `,
};

const disabledStyle = {
  css: css`
    background-color: ${color.Label.Disable};
  `,
  color: color.Label.Assistive,
};

function SolidButton({
  size = 'full',
  type = 'primary',
  disabled = false,
  LeftIcon,
  RightIcon,
  children,
  ...rest
}: PropsNeedChildren<ButtonProps>) {
  const { textSize, iconSize } = useButtonStyle(size);
  const color = disabled ? disabledStyle.color : '#FFFFFF';
  return (
    <S.Container $sizeStyle={sizeStyle[size]}>
      {type === 'primary' && !disabled && (
        <BackGround
          colors={['#7C71F5', '#6E9DF5']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
      )}
      <S.Button
        $typeStyle={typeStyle[type]}
        $disabledStyle={disabledStyle.css}
        disabled={disabled}
        {...rest}>
        <S.ButtonContent>
          {LeftIcon &&
            cloneElement(LeftIcon, {
              color,
              size: iconSize,
              style: { width: iconSize, height: iconSize },
            })}
          <Typography
            variant={textSize}
            fontWeight='semiBold'
            color={color}>
            {children}
          </Typography>
          {RightIcon &&
            cloneElement(RightIcon, {
              color,
              size: iconSize,
              style: { width: iconSize, height: iconSize },
            })}
        </S.ButtonContent>
      </S.Button>
    </S.Container>
  );
}

const BackGround = styled(LinearGradient)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default SolidButton;
