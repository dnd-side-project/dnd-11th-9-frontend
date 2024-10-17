import styled from '@emotion/native';
import { useRoute } from '@react-navigation/core';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import useAuth from '@/hooks/queries/useAuth';
import { flexDirectionColumnItemsCenter } from '@/styles/common';

function Login() {
  const router = useRouter();
  const { loginMutation, isLogin, isLoginLoading } = useAuth();
  const { token, refresh } = useRoute().params as { token?: string; refresh?: string };

  useEffect(() => {
    if (typeof token === 'string' && typeof refresh === 'string') {
      loginMutation(token, refresh);
    }
  }, [refresh, token]);

  useEffect(() => {
    if (!isLoginLoading && isLogin) {
      router.replace('/');
    }
  }, [isLoginLoading, isLogin, router]);

  return (
    <S.Container>
      {isLoginLoading ? (
        <ActivityIndicator
          size='large'
          color='#0000ff'
        />
      ) : null}
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
