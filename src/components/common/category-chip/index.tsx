import type { ReactNativeStyle } from '@emotion/native';
import { css } from '@emotion/native';
import { memo } from 'react';

import Typography from '@/components/common/typography';
import { color } from '@/styles/theme';

import * as S from './style';

type Category = '기술' | '커뮤니케이션' | '성실성' | '협업' | '문서화' | '시간관리' | '리더십';

type Props = {
  category: Category;
};

const CategoryStyle: Record<Category, ReactNativeStyle> = {
  기술: css`
    background: ${color.Blue['95']};
    border: 1px solid ${color.Blue['90']};
  `,
  성실성: css`
    background: ${color.Pink['95']};
    border: 1px solid ${color.Pink['90']};
  `,
  협업: css`
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
  시간관리: css`
    background: ${color.Violet['95']};
    border: 1px solid ${color.Violet['90']};
  `,
  리더십: css`
    background: #e6fad9;
    border: 1px solid #c3f0a3;
  `,
};

function CategoryChip({ category }: Props) {
  return (
    <S.Container $categoryStyle={CategoryStyle[category]}>
      <Typography
        color='#1D212C'
        variant='Caption1'>
        {category}
      </Typography>
    </S.Container>
  );
}

export default memo(CategoryChip);
