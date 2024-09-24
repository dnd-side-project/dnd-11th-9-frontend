import Skeleton from '@/components/common/skeleton';
import ReviewCard from '@/components/review/ReviewCard';

import * as S from './style';

type Props = {
  projectName: string;
  startDate: string;
  endDate: string;
};

function ReviewSkeletonCard({ projectName, startDate, endDate }: Props) {
  return (
    <ReviewCard projectName={projectName}>
      <S.SkeletonBox>
        <Skeleton variant='rounded' />
        <Skeleton variant='rounded' />
        <Skeleton variant='rounded' />
        <Skeleton
          variant='rounded'
          width='90%'
        />
      </S.SkeletonBox>
      <ReviewCard.DateBox
        startDate={startDate}
        endDate={endDate}
      />
    </ReviewCard>
  );
}

export default ReviewSkeletonCard;
