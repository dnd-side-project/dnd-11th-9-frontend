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
      case 'large':
        return { textSize: 'Body1/Normal', iconSize: 16 };
      case 'medium':
        return { textSize: 'Body2/Normal', iconSize: 16 };
      case 'small':
        return { textSize: 'Caption1', iconSize: 12 };
      default:
        return { textSize: 'Body2/Normal', iconSize: 16 };
    }
  }, [size]);
}

export function useButtonTextColor(type: ButtonProps['type'], disabled: ButtonProps['disabled']) {
  return useMemo<{ color: string }>(() => {
    if (disabled) {
      return { color: color.Label.Disable };
    }
    switch (type) {
      case 'primary':
        return { color: color.Primary.Normal };
      case 'secondary':
        return { color: color.Label.Normal };
      default:
        return { color: '#000000' };
    }
  }, [type, disabled]);
}
