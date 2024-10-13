import { memo } from 'react';

import Typography from '@/components/common/typography';
import type { KorCategoryType } from '@/enums/categoryEnum';
import { CategoryStyle } from '@/styles/category';

import * as S from './style';

type Props = {
  category: KorCategoryType;
};

function CategoryChip({ category }: Props) {
  return (
    <S.Container $categoryStyle={CategoryStyle[category]}>
      <Typography
        color='#1D212C'
        variant='Label1/Reading'>
        {category}
      </Typography>
    </S.Container>
  );
}

export default memo(CategoryChip);
