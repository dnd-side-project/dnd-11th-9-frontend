import styled from '@emotion/native';

import { Typography } from '@/components/common/Typography';

export default function HomeScreen() {
  return (
    <S.Container>
      <Typography>:)</Typography>
    </S.Container>
  );
}

const S = {
  Container: styled.SafeAreaView`
    flex: 1;
  `,
};
