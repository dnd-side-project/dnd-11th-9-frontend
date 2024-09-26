import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { color } from '@/styles/theme';

import * as S from './style';

type Props = {
  max_value: number;
  current_value: number;
};

function SlideBar({ max_value, current_value }: Props) {
  const slideBarStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      width: withTiming(`${(current_value / max_value) * 100}%`),
      height: '100%',
      backgroundColor: color.Primary.Normal,
    };
  });

  return (
    <S.Container>
      <Animated.View style={slideBarStyle} />
    </S.Container>
  );
}

export default SlideBar;
