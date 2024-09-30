import CategoryIcon from '@/components/common/icon/category-icon';
import Typography from '@/components/common/typography';
import { CategoryStyle } from '@/styles/category';
import { shadow } from '@/styles/shadow';
import { color } from '@/styles/theme';
import type { CategoryType } from '@/types/category';

import * as S from './style';

enum TagEnum {
  '걸어다니는 위키' = '기술',
  '아이디어 화수분' = '아이데이션',
  '글도 잘쓰는 일잘러' = '문서화',
  '확신의 J' = '문제해결',
  '책임감 넘치는 리더' = '리더십',
  '책임감 넘치는 팀원' = '팔로워십',
  '갈등을 못참는 박애주의자' = '커뮤니케이션',
  '성실함의 아이콘' = '성실성',
  '몸에 밴 배려' = '배려심',
}

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
        {tag}
      </Typography>
    </S.Container>
  );
}

export default Tag;
