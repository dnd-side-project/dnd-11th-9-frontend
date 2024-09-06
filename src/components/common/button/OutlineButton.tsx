import type { ReactNativeStyle } from '@emotion/native';
import { css } from '@emotion/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from 'react-native';

import type { ButtonProps, CustomButtonProps } from '@/components/common/button/button.type';
import Typography from '@/components/common/typography';
import { useButtonStyle, useButtonTextColor } from '@/hooks/useButtonStyle';
import { color } from '@/styles/theme';
import type { PropsNeedChildren } from '@/types';
import { isMobile } from '@/utils';

import * as S from './Button.style';

const typeStyle: Record<CustomButtonProps['type'], ReactNativeStyle> = {
  primary: css`
    background-color: ${color.Background.Normal};
    border: 1px solid ${color.Primary.Normal};
  `,
  secondary: css`
    background-color: ${color.Background.Normal};

    /* Todo border 값 rgb 값으로 변경예정 */
    border: 1px solid ${color.Primary.Sub};
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
    background-color: ${color.Text.OnViewDisabled};
  `,
  color: color.Text.OnViewDisabled,
};

function SolidButton({
  size = 'full',
  type = 'primary',
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  ...rest
}: PropsNeedChildren<ButtonProps>) {
  const { textSize, iconSize } = useButtonStyle(size);
  const { color } = useButtonTextColor(type, disabled);

  return (
    <S.Container $sizeStyle={sizeStyle[size]}>
      <S.Button
        $typeStyle={typeStyle[type]}
        $disabledStyle={disabledStyle.css}
        disabled={disabled}
        {...rest}>
        <S.ButtonContent>
          {leftIcon ? (
            <Ionicons
              size={iconSize}
              name={leftIcon}
              color={color}
            />
          ) : (
            <View style={{ height: iconSize, width: iconSize }} />
          )}
          <Typography
            variant={textSize}
            fontWeight={isMobile ? 'semiBold' : 'normal'}
            color={color}>
            {children}
          </Typography>
          {rightIcon ? (
            <Ionicons
              size={iconSize}
              name={rightIcon}
              color={color}
            />
          ) : (
            <View style={{ height: iconSize, width: iconSize }} />
          )}
        </S.ButtonContent>
      </S.Button>
    </S.Container>
  );
}

export default SolidButton;
