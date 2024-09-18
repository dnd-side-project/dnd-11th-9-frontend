import { AntDesign } from '@expo/vector-icons';

import Typography from '@/components/common/typography';

import * as S from './style';

type Props = {
  onChange?: () => void;
  date?: string;
};

function DateInput({ onChange, date }: Props) {
  return (
    <S.Container onPress={onChange}>
      <AntDesign
        name='calendar'
        size={24}
        color='#979797'
      />
      <Typography>{date}</Typography>
    </S.Container>
  );
}

export default DateInput;
