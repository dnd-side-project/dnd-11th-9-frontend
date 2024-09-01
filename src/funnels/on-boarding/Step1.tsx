import Animated, { FadeOutLeft } from 'react-native-reanimated';

import PrimaryButton from '@/components/common/button/primaryButton';
import Typography from '@/components/common/typography';

import * as S from './styles';

type Props = {
  onPress: () => void;
  onSkip: () => void;
};

function Step1({ onPress, onSkip }: Props) {
  return (
    <Animated.View
      style={{ flex: 1 }}
      exiting={FadeOutLeft.duration(500)}>
      <S.Container>
        <S.TextBox>
          <Typography
            variant='Heading1'
            color='#878A93'>
            안녕하세요
          </Typography>
          <Typography variant='Title3'>
            {`위프로는 효과적으로
자신을 어필할 수 있도록
돕는 서비스입니다`}
          </Typography>
          <S.StepBar>
            <S.ActiveStep />
            <S.InactiveStep />
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

export default Step1;
