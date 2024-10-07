import CategoryIcon from '@/components/common/icon/category-icon';
import Typography from '@/components/common/typography';
import { shadow } from '@/styles/shadow';
import { TagEnum, TagStyle } from '@/styles/tag';
import { color } from '@/styles/theme';
import type { CategoryType } from '@/types/category';

import * as S from './style';

type Props = {
  tag: keyof typeof TagEnum;
  hasIcon?: boolean;
  isActive?: boolean;
  hasShadow?: boolean;
};

function Tag({ tag, hasIcon = true, isActive = false, hasShadow = false }: Props) {
  const category: CategoryType = TagEnum[tag];
  return (
    <S.Container
      $isActive={isActive && TagStyle[category]}
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
        {tag}
      </Typography>
    </S.Container>
  );
}

export default Tag;
