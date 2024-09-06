import type { ReactNativeStyle } from '@emotion/native';
import styled, { css } from '@emotion/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import type { ComponentProps } from 'react';
import { useMemo } from 'react';
import { View } from 'react-native';

import type { ButtonProps, CustomButtonProps } from '@/components/common/button/button.type';
import Typography from '@/components/common/typography';
import { color } from '@/styles/theme';
import type { PropsNeedChildren } from '@/types';
import { isMobile } from '@/utils';

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
    background-color: #7f7f7f;
  `,
  color: '#000000',
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
  const { textSize, iconSize } = useMemo<{
    textSize: ComponentProps<typeof Typography>['variant'];
    iconSize: number;
  }>(() => {
    switch (size) {
      case 'full':
      case 'large':
        return { textSize: 'Body1/Normal', iconSize: 16 };
      case 'medium':
        return { textSize: 'Body2/Normal', iconSize: 16 };
      case 'small':
        return { textSize: 'Caption1', iconSize: 12 };
    }
  }, [size]);

  return (
    <S.Container $sizeStyle={sizeStyle[size]}>
      <S.Button
        $typeStyle={typeStyle[type]}
        $disabledStyle={disabledStyle.css}
        disabled={disabled}
        {...rest}>
        {type === 'primary' && !disabled && (
          <BackGround
            colors={['#7C71F5', '#6E9DF5']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
        )}
        <S.ButtonContent>
          {leftIcon ? (
            <Ionicons
              size={iconSize}
              name={leftIcon}
              color={disabled ? disabledStyle.color : '#FFFFFF'}
            />
          ) : (
            <View style={{ height: iconSize, width: iconSize }} />
          )}
          <Typography
            variant={textSize}
            fontWeight={isMobile ? 'semiBold' : 'normal'}
            color={disabled ? disabledStyle.color : '#FFFFFF'}>
            {children}
          </Typography>
          {rightIcon ? (
            <Ionicons
              size={iconSize}
              name={rightIcon}
              color={disabled ? disabledStyle.color : '#FFFFFF'}
            />
          ) : (
            <View style={{ height: iconSize, width: iconSize }} />
          )}
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
