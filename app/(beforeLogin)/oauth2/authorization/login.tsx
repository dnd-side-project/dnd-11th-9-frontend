import styled from '@emotion/native';
import { useRoute } from '@react-navigation/core';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { useSession } from '@/store';
import { flexDirectionColumnItemsCenter } from '@/styles/common';
import { setHeader } from '@/utils';

function Login() {
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const router = useRouter();
  const { signIn } = useSession();

  const { token, refresh } = route.params as { token?: string; refresh?: string };

  useEffect(
    function setToken() {
      if (typeof token === 'string' && typeof refresh === 'string') {
        setHeader('Authorization', `Bearer ${token}`);
        signIn(refresh);
      }

      setLoading(false);
      // ts-expect-error signIn을 넣을 경우 무한 재 렌더링을 하게 됩니다.
    },
    [refresh, token]
  );

  useEffect(
    function isNotLoadRedirect() {
      if (!loading) {
        router.replace('/');
      }
    },
    [loading, router]
  );

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
    ${flexDirectionColumnItemsCenter};
    flex: 1;
  `,
};

export default Login;
