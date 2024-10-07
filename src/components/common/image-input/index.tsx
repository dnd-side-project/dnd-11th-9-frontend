import { AntDesign } from '@expo/vector-icons';
import type { PressableProps } from 'react-native';

import { shadow } from '@/styles/shadow';
import { color } from '@/styles/theme';

import * as S from './style';

type Props = PressableProps & {
  onPress: () => void;
};

function ImageInput({ onPress, ...rest }: Props) {
  return (
    <S.Container
      style={shadow[2]}
      onPress={onPress}
      {...rest}>
      <AntDesign
        style={{ textAlign: 'center', lineHeight: 24 }}
        name='plus'
        size={24}
        color={color.Label.Alternative}
      />
    </S.Container>
  );
}

export default ImageInput;
