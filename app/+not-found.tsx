import styled from '@emotion/native';
import { Link, Stack } from 'expo-router';

import { Typography } from '@/components/common/Typography';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <E.Container>
        <Typography>This is NotFound Screen</Typography>
        <E.Link href='/'>
          <Typography>Go to home screen!</Typography>
        </E.Link>
      </E.Container>
    </>
  );
}

const E = {
  Container: styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 20px;
  `,
  Link: styled(Link)`
    margin-top: 15px;
    padding: 15px 0;
  `,
};
