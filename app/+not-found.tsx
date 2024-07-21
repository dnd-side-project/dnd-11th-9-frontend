import styled from '@emotion/native';
import { Link, Stack } from 'expo-router';

import { CustomText } from '@/src/components/common';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <E.Container>
        <CustomText type='title'>This is NotFound Screen</CustomText>
        <E.Link href='/'>
          <CustomText type='link'>Go to home screen!</CustomText>
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
