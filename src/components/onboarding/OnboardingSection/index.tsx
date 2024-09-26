import BusinessCard from '@/components/home/BusinessCard';
import Category from '@/components/questionnaire/category';
import QuestionnaireCheckListSkeleton from '@/components/questionnaire/QuestionnaireCheckListSkeleton';
import ReviewSkeletonCard from '@/components/review/ReviewSkeletonCard';

import * as S from './style';

type Props = {
  step: number;
};

function OnboardingSection({ step }: Props) {
  switch (step) {
    case 0:
      return (
        <S.ChipContainer>
          <Category
            onboarding
            category='기술'
          />
          <Category
            onboarding
            category='커뮤니케이션'
          />
          <Category
            onboarding
            category='성실성'
          />
          <Category
            onboarding
            category='협업'
          />
          <Category
            onboarding
            category='문서화'
          />
          <Category
            onboarding
            category='시간관리'
          />
          <Category
            onboarding
            category='리더십'
          />
        </S.ChipContainer>
      );
    case 1:
      return <QuestionnaireCheckListSkeleton />;
    case 2:
      return (
        <BusinessCard
          onboarding
          projectName='wepro'
          name='김프로'
          isActive={true}
          review={`문제를 직접 해결하는
책임감 넘치는 슈퍼 히어로`}
        />
      );
    case 3:
      return (
        <S.ReviewCardContainer>
          <ReviewSkeletonCard
            projectName='프로젝트'
            startDate='2024.07'
            endDate='2024.10'
          />
          <ReviewSkeletonCard
            projectName='프로젝트'
            startDate='2024.07'
            endDate='2024.10'
          />
        </S.ReviewCardContainer>
      );
  }
}

export default OnboardingSection;
