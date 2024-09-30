import type { ReactNativeStyle } from '@emotion/native';
import { css } from '@emotion/native';

import { color } from '@/styles/theme';
import type { CategoryType } from '@/types/category';

export const CategoryStyle: Record<CategoryType, ReactNativeStyle> = {
  기술: css`
    background: ${color.Blue['95']};
    border: 1px solid ${color.Blue['90']};
  `,
  성실성: css`
    background: ${color.Pink['95']};
    border: 1px solid ${color.Pink['90']};
  `,
  아이데이션: css`
    background: ${color.Orange['95']};
    border: 1px solid ${color.Orange['90']};
  `,
  문서화: css`
    background: ${color.Red['95']};
    border: 1px solid ${color.Red['90']};
  `,
  커뮤니케이션: css`
    background: ${color.LightBlue['95']};
    border: 1px solid ${color.LightBlue['90']};
  `,
  문제해결: css`
    background: ${color.Violet['95']};
    border: 1px solid ${color.Violet['90']};
  `,
  리더십: css`
    background: #e6fad9;
    border: 1px solid #c3f0a3;
  `,
  배려심: css`
    background: ${color.Purple['95']};
    border: 1px solid ${color.Purple['90']};
  `,
  팔로워십: css`
    background: #d9fade;
    border: 1px solid #a3f0b8;
  `,
} as const;
