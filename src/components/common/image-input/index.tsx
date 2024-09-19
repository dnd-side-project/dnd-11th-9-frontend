import { AntDesign } from '@expo/vector-icons';

import { color } from '@/styles/theme';

import * as S from './style';

type Props = {
  onChange: () => void;
};

function ImageInput({ onChange }: Props) {
  return (
    <S.Container onPress={onChange}>
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
