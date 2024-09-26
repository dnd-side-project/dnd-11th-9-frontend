import { AntDesign } from '@expo/vector-icons';
import dayjs from 'dayjs';

import Typography from '@/components/common/typography';
import { shadow } from '@/styles/shadow';
import { color } from '@/styles/theme';

import * as S from './style';

type Props = {
  date: Date;
  touched: boolean;
  onPress: () => void;
  onTouchEnd: () => void;
};

function DateInput({ touched, onPress, onTouchEnd, date }: Props) {
  return (
    <S.Container
      style={shadow[2]}
      onPress={onPress}
      onTouchEnd={onTouchEnd}>
      <S.IconBox>
        <AntDesign
          name='calendar'
          size={20}
          color={touched ? color.Label.Normal : '#979797'}
        />
      </S.IconBox>
      <Typography color={touched ? color.Label.Normal : '#979797'}>
        {dayjs(date).format('YYYY-MM-DD')}
      </Typography>
    </S.Container>
  );
}

export default DateInput;
