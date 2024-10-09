import { memo } from 'react';
import type { PressableProps } from 'react-native';

import CategoryIcon from '@/components/common/icon/category-icon';
import Typography from '@/components/common/typography';
import type { KorCategoryType } from '@/enums/categoryEnum';
import { CategoryStyle } from '@/styles/category';
import { shadow } from '@/styles/shadow';
import { color } from '@/styles/theme';

import * as S from './style';

type Props = {
  isActive?: boolean;
  hasIcon?: boolean;
  hasShadow?: boolean;
  category: KorCategoryType;
} & PressableProps;

function Category({
  category,
  hasIcon = true,
  isActive = false,
  hasShadow = false,
  ...rest
}: Props) {
  return (
    <S.Container
      $isActive={isActive && CategoryStyle[category]}
      style={hasShadow && shadow[2]}
      {...rest}>
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
