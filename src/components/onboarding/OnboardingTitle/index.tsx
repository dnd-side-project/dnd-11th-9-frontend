import Typography from '@/components/common/typography';
import { color } from '@/styles/theme';

import * as S from './style';

export const ON_BOARDING = [
  `위프로와 함께
당신의 경험을 어필해보세요`,
  `프로젝트를 함께한 팀원들에게
능력을 평가받아요`,
  `평가와 함께 나를 표현하는
명함을 받아요`,
  `답변의 익명성으로
솔직한 답변을 받을 수 있어요`,
] as const;

type Props = {
  step: number;
};

function OnboardingTitle({ step }: Props) {
  return (
    <S.Container>
      <Typography
        style={{ textAlign: 'center' }}
        color={color.Label.Normal}
        fontWeight='medium'
        variant='Title3'>
        {ON_BOARDING[step]}
      </Typography>
    </S.Container>
  );
}

export default OnboardingTitle;
