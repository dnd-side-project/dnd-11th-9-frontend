import styled from '@emotion/native';
import { router } from 'expo-router';
import React, { useCallback } from 'react';

import PrimaryButton from '@/components/common/button/primaryButton';
import { useSession } from '@/store';
import { flexItemCenter } from '@/styles/common';

function SignIn() {
  const { signIn } = useSession();

  const handleSignIn = useCallback(() => {
    signIn();
    router.replace('/');
  }, [signIn]);

  return (
    <S.Container>
      <PrimaryButton onPress={handleSignIn}>로그인</PrimaryButton>
    </S.Container>
  );
}

const S = {
  Container: styled.SafeAreaView`
    flex: 1;
    ${flexItemCenter};
    width: 100%;
  `,
};

export default SignIn;
