import type { PropsWithChildren } from 'react';

import Typography from '@/components/common/typography';

import * as S from './style';

type DateBoxProps = {
  startDate: string;
  endDate: string;
};

function DateBox({ startDate, endDate }: DateBoxProps) {
  return (
    <Typography
      style={{ opacity: 0.5 }}
      variant='Caption1'
      fontWeight='medium'
      color='1D212C'>
      {`${startDate} - ${endDate}`}
    </Typography>
  );
}

type Props = {
  projectName: string;
};

function Card({ projectName, children }: PropsWithChildren<Props>) {
  return (
    <S.Container>
      <S.ProjectChip>
        <Typography
          variant='Caption1'
          fontWeight='medium'
          color='#1D212C'>
          {projectName}
        </Typography>
      </S.ProjectChip>
      <S.ContentsBox>{children}</S.ContentsBox>
    </S.Container>
  );
}

const ReviewCard = Object.assign(Card, {
  DateBox,
});

export default ReviewCard;
