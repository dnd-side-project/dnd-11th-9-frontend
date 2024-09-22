import { AntDesign } from '@expo/vector-icons';

import { shadow } from '@/styles/shadow';
import { color } from '@/styles/theme';

import * as S from './style';

type Props = {
  onChange: () => void;
};

function ImageInput({ onChange }: Props) {
  return (
    <S.Container
      style={shadow[2]}
      onPress={onChange}>
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
