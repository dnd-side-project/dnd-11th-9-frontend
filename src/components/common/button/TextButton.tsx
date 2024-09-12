import { cloneElement } from 'react';

import type { ButtonProps } from '@/components/common/button/button.type';
import Typography from '@/components/common/typography';
import { useButtonStyle, useButtonTextColor } from '@/hooks/useButtonStyle';
import type { PropsNeedChildren } from '@/types';

import * as S from './Button.style';

function TextButton({
  size = 'full',
  type = 'primary',
  disabled = false,
  LeftIcon,
  RightIcon,
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
  );
}

export default TextButton;
