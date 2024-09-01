import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';

import PrimaryButton from '@/components/common/button/primaryButton';
import Typography from '@/components/common/typography';

import * as S from './styles';

type Props = {
  onPress: () => void;
  onSkip: () => void;
};

function Step3({ onPress, onSkip }: Props) {
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
            어떻게 보여주나요?
          </Typography>
          <Typography variant='Title3'>
            {`팀원의 평가와 함께
나를 표현할 수 있는
명함을 받아요`}
          </Typography>
          <S.StepBar>
            <S.InactiveStep />
            <S.InactiveStep />
            <S.ActiveStep />
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

export default Step3;
