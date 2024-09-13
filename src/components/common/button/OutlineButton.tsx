import type { ReactNativeStyle } from '@emotion/native';
import { css } from '@emotion/native';
import { cloneElement } from 'react';

import type { ButtonProps, CustomButtonProps } from '@/components/common/button/button.type';
import Typography from '@/components/common/typography';
import { useButtonStyle, useButtonTextColor } from '@/hooks/useButtonStyle';
import { color } from '@/styles/theme';
import type { PropsNeedChildren } from '@/types';

import * as S from './Button.style';

const typeStyle: Record<CustomButtonProps['type'], ReactNativeStyle> = {
  primary: css`
    background-color: ${color.Background.Normal};
    border: 1px solid ${color.Primary.Normal};
  `,
  secondary: css`
    background-color: ${color.Background.Normal};
    border: 1px solid ${color.Line.Normal};
  `,
};

const sizeStyle: Record<CustomButtonProps['size'], ReactNativeStyle> = {
  large: css`
    height: 48px;
  `,
  medium: css`
    height: 40px;
  `,
  small: css`
    height: 32px;
  `,
};

const disabledStyle = {
  css: css`
    border: 1px solid ${color.Label.Disable};
  `,
  color: color.Label.Disable,
};

function OutLineButton({
  size = 'large',
  type = 'primary',
  disabled = false,
  LeftIcon,
  RightIcon,
  children,
  full = false,
  ...rest
}: PropsNeedChildren<ButtonProps>) {
  const { textSize, iconSize } = useButtonStyle(size);
  const { color } = useButtonTextColor(type, disabled);

  return (
    <S.Container
      $full={full}
      $sizeStyle={sizeStyle[size]}>
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

export default OutLineButton;
