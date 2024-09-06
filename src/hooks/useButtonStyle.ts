import { type ComponentProps, useMemo } from 'react';

import type { ButtonProps } from '@/components/common/button/button.type';
import type Typography from '@/components/common/typography';
import { color } from '@/styles/theme';

export function useButtonStyle(size: ButtonProps['size']) {
  return useMemo<{
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
}

export function useButtonTextColor(type: ButtonProps['type'], disabled: ButtonProps['disabled']) {
  return useMemo<{ color: string }>(() => {
    if (disabled) {
      /* Todo disabled 색깔 수정 */
      return { color: '#000000' };
    }
    switch (type) {
      case 'primary':
        return { color: color.Primary.Normal };
      case 'secondary':
        return { color: color.Border.OutLine };
    }
  }, [type, disabled]);
}
