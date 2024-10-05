import type { ReactNativeStyle } from '@emotion/native';
import { css } from '@emotion/native';

import { color } from '@/styles/theme';
import type { CategoryType } from '@/types/category';

export const CategoryStyle: Record<CategoryType, ReactNativeStyle> = {
  기술: css`
    background: ${color.Blue['99']};
    border: 1px solid ${color.Blue['55']};
  `,
  성실성: css`
    background: ${color.Pink['99']};
    border: 1px solid ${color.Pink['50']};
  `,
  아이데이션: css`
    background: ${color.Orange['99']};
    border: 1px solid ${color.Orange['50']};
  `,
  문서화: css`
    background: ${color.Red['99']};
    border: 1px solid ${color.Red['50']};
  `,
  커뮤니케이션: css`
    background: ${color.LightBlue['99']};
    border: 1px solid ${color.LightBlue['50']};
  `,
  문제해결: css`
    background: ${color.Violet['99']};
    border: 1px solid ${color.Violet['50']};
  `,
  리더십: css`
    background: #f7fff1;
    border: 1px solid #93ec67;
  `,
  배려심: css`
    background: ${color.Purple['99']};
    border: 1px solid ${color.Purple['50']};
  `,
  팔로워십: css`
    background: #edfff0;
    border: 1px solid #4af377;
  `,
} as const;
