import { memo } from 'react';

import CategoryIcon from '@/components/common/icon/category-icon';
import Typography from '@/components/common/typography';
import { CategoryStyle } from '@/styles/category';
import { shadow } from '@/styles/shadow';
import { color } from '@/styles/theme';
import type { CategoryType } from '@/types/category';

import * as S from './style';

type Props = {
  onboarding?: boolean;
  isActive?: boolean;
  hasIcon?: boolean;
  hasShadow?: boolean;
  category: CategoryType;
};

function Category({
  category,
  onboarding = false,
  hasIcon = true,
  isActive = false,
  hasShadow = false,
}: Props) {
  return (
    <S.Container
      $onboarding={onboarding}
      $isActive={isActive && CategoryStyle[category]}
      style={hasShadow && shadow[2]}>
      {hasIcon && (
        <S.IconWrapper>
          <CategoryIcon category={category} />
        </S.IconWrapper>
      )}
      <Typography
        color={color.Label.Normal}
        variant='Body1/Normal'
        fontWeight='semiBold'>
        {category}
      </Typography>
    </S.Container>
  );
}

export default memo(Category);
