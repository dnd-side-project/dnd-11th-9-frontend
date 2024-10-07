import { AntDesign } from '@expo/vector-icons';
import React from 'react';

import Typography from '@/components/common/typography';
import { color } from '@/styles/theme';

import * as S from './style';

type Props = {
  error_message: string;
};

function ErrorText({ error_message }: Props) {
  return (
    <S.Container>
      <AntDesign
        name='exclamationcircleo'
        size={14}
        color={color.Status.Error}
      />
      <Typography
        color={color.Status.Error}
        variant='Label1/Normal'>
        {error_message}
      </Typography>
    </S.Container>
  );
}

export default ErrorText;
