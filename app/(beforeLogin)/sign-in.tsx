import { router } from 'expo-router';
import { useCallback } from 'react';

import Typography from '@/components/common/typography';
import LoginButton from '@/components/sign-in/LoginButton';
import LogoSection from '@/components/sign-in/LogoSection';
import { useSession } from '@/store';

import * as S from './sign-in.styles';

function SignIn() {
  const { signIn } = useSession();

  const handleSignIn = useCallback(() => {
    signIn();
    router.replace('/');
  }, [signIn]);

  // Todo kakao 로그인 처리 해야함
  const handleKakaoLogin = useCallback(() => {
    handleSignIn();
  }, []);

  // Todo apple 로그인 처리 해야함
  const handleAppleLogin = useCallback(() => {
    handleSignIn();
  }, [handleSignIn]);

  return (
    <S.Container>
      <LogoSection />
      <S.LoginContainer>
        <Typography
          style={{
            textAlign: 'center',
          }}
          fontWeight='medium'
          variant='Label1/Normal'>
          3초 가입으로 바로 시작해보세요
        </Typography>
        <S.LoginButtonBox>
          <LoginButton
            provider='KAKAO'
            onPress={handleKakaoLogin}
          />
          <LoginButton
            provider='APPLE'
            onPress={handleAppleLogin}
          />
        </S.LoginButtonBox>
      </S.LoginContainer>
    </S.Container>
  );
}

export default SignIn;
