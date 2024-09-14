import { useRoute } from '@react-navigation/core';
import { Redirect } from 'expo-router';
import React, { useLayoutEffect } from 'react';

import { useSession } from '@/store';
import { setHeader } from '@/utils';

function Login() {
  const route = useRoute();
  const { signIn } = useSession();

  const { token, refresh } = route.params as { token?: string; refresh?: string };

  useLayoutEffect(() => {
    if (typeof token === 'string' && typeof refresh === 'string') {
      setHeader('Authorization', `Bearer ${token}`);
      signIn();
    }
    // ts-expect-error signIn을 넣을 경우 무한 재 렌더링을 하게 됩니다.
  }, [refresh, token]);

  return <Redirect href='/' />;
}

export default Login;
