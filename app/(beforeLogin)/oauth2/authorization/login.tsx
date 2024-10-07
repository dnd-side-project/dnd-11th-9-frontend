import styled from '@emotion/native';
import { useRoute } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import { useSession } from '@/store';
import { setHeader } from '@/utils';

function Login() {
  const route = useRoute();
  const { signIn } = useSession();

  const { token, refresh } = route.params as { token?: string; refresh?: string };

  useEffect(() => {
    if (typeof token === 'string' && typeof refresh === 'string') {
      setHeader('Authorization', `Bearer ${token}`);
      signIn(refresh);
    }
    // ts-expect-error signIn을 넣을 경우 무한 재 렌더링을 하게 됩니다.
  }, [refresh, token]);

  return (
    <S.Container>
      <ActivityIndicator
        size='large'
        color='#0000ff'
      />
    </S.Container>
  );
}

const S = {
  Container: styled.SafeAreaView`
    flex: 1;
  `,
};

export default Login;
