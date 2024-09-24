import type { PropsWithChildren } from 'react';
import { memo } from 'react';

import Typography from '@/components/common/typography';

import * as S from './style';

function ProjectChip({ children }: PropsWithChildren) {
  return (
    <S.Container>
      <Typography
        variant='Caption1'
        fontWeight='medium'
        color='#1D212C'>
        {children}
      </Typography>
    </S.Container>
  );
}

export default memo(ProjectChip);
