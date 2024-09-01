import { FadeInRight, FadeOutLeft } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

import PrimaryButton from '@/components/common/button/primaryButton';
import Typography from '@/components/common/typography';

import * as S from './styles';

type Props = {
  onPress: () => void;
  onSkip: () => void;
};

function Step2({ onPress, onSkip }: Props) {
  return (
    <Animated.View
      style={{ flex: 1 }}
      entering={FadeInRight.duration(500)}
      exiting={FadeOutLeft.duration(500)}>
      <S.Container>
        <S.TextBox>
          <Typography
            variant='Heading1'
            color='#878A93'>
            무슨 방법으로요?
          </Typography>
          <Typography variant='Title3'>
            {`프로젝트에 따라
서로의 기술과 협업 능력을
평가할 수 있어요`}
          </Typography>
          <S.StepBar>
            <S.InactiveStep />
            <S.ActiveStep />
            <S.InactiveStep />
          </S.StepBar>
        </S.TextBox>
        <S.StepBox>
          <PrimaryButton onPress={onPress}>다음</PrimaryButton>
          <S.SkipButton onPress={onSkip}>
            <Typography
              variant='Body1/Normal'
              color='#878A93'>
              건너뛰기
            </Typography>
          </S.SkipButton>
        </S.StepBox>
      </S.Container>
    </Animated.View>
  );
}

export default Step2;
