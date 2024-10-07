import Skeleton from '@/components/common/skeleton';
import QuestionnaireCheckList from '@/components/questionnaire/QuestionnaireCheckList';

import * as S from './style';

function SkeletonItem() {
  return (
    <S.SkeletonBox>
      <Skeleton
        variant='rounded'
        width='60%'
        height={14}
      />
      <Skeleton
        variant='rounded'
        width='30%'
        height={14}
      />
    </S.SkeletonBox>
  );
}

function QuestionnaireCheckListSkeleton() {
  return (
    <QuestionnaireCheckList
      initialCheckValue={3}
      title={`프로님은 회의 중 의견을 나눌때
어땠나요?`}
      category='기술'>
      <QuestionnaireCheckList.Item value={0}>
        <SkeletonItem />
      </QuestionnaireCheckList.Item>
      <QuestionnaireCheckList.Item value={1}>
        <SkeletonItem />
      </QuestionnaireCheckList.Item>
      <QuestionnaireCheckList.Item value={2}>
        <SkeletonItem />
      </QuestionnaireCheckList.Item>
    </QuestionnaireCheckList>
  );
}

export default QuestionnaireCheckListSkeleton;
