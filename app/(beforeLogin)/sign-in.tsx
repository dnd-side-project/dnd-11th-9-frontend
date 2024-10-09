import styled from '@emotion/native';
import Constants from 'expo-constants/src/Constants';
import { router } from 'expo-router';
import { rgba } from 'polished';
import { useEffect } from 'react';
import { Platform } from 'react-native';

import WeproLogoSvg from '@/components/common/icon/wepro-logo-svg';
import Typography from '@/components/common/typography';
import LoginButton from '@/components/sign-in/LoginButton';
import { useSession } from '@/store';
import { flexDirectionColumn, flexItemCenter } from '@/styles/common';
import { theme } from '@/styles/theme';
import { getSize } from '@/utils';

function SignIn() {
  const { signIn, refreshToken } = useSession();

  useEffect(
    function ifHasRefreshTokenGoToMain() {
      if (refreshToken) {
        signIn(refreshToken);
      }
    },
    [refreshToken, signIn]
  );

  return (
    <S.LoginWrapper>
      <S.BackgroundImage
        resizeMode='cover'
        source={require('../../assets/images/onboarding-bg.png')}
      />
      <S.Container>
        <S.LogoSection>
          <Typography
            variant='Heading1'
            color={rgba(0, 0, 0, 0.3)}>
            함께 완성하는 나의 프로필
          </Typography>
          <WeproLogoSvg
            color={theme.color.Label.Normal}
            width={195}
            height={48.5}
          />
        </S.LogoSection>

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
              onPress={() => router.replace('/oauth2/authorization/kakao')}
            />
            {Platform.OS === 'ios' && (
              <LoginButton
                provider='APPLE'
                onPress={() => router.replace('/oauth2/authorization/apple')}
              />
            )}
          </S.LoginButtonBox>
        </S.LoginContainer>
      </S.Container>
    </S.LoginWrapper>
  );
}

const statusBarHeight = Constants.statusBarHeight || 0;

const S = {
  Container: styled.SafeAreaView`
    flex: 1;
    ${flexItemCenter};
    justify-content: space-between;
    width: 100%;
    margin-top: ${statusBarHeight + 135 + 'px'};
  `,

  BackgroundImage: styled.Image`
    position: absolute;
    flex: 1;
    height: 100%;
  `,

  LogoSection: styled.View`
    gap: 12px;
    width: 100%;
    ${flexDirectionColumn};
    padding-horizontal: 32px;
  `,

  LoginWrapper: styled.SafeAreaView`
    flex: 1;
    width: ${getSize.deviceWidth + 'px'};
    overflow: hidden;
  `,

  LoginContainer: styled.View`
    ${flexDirectionColumn};
    gap: 20px;
    width: 100%;
    padding-horizontal: 20px;
    padding-bottom: 54px;
  `,

  LoginButtonBox: styled.View`
    ${flexDirectionColumn};
    gap: 16px;
    width: 100%;
  `,
};

export default SignIn;
