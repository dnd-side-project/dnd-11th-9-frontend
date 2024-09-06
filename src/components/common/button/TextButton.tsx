import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from 'react-native';

import type { ButtonProps } from '@/components/common/button/button.type';
import Typography from '@/components/common/typography';
import { useButtonStyle, useButtonTextColor } from '@/hooks/useButtonStyle';
import type { PropsNeedChildren } from '@/types';
import { isMobile } from '@/utils';

import * as S from './Button.style';

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
    <S.Button
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
  );
}

export default SolidButton;
