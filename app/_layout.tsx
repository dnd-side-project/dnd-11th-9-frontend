import styled from '@emotion/native';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Platform } from 'react-native';

import Provider from '@/components/common/provider';
import { SCREEN_SIZE, SITE_URLS } from '@/constants';
import useAuth from '@/hooks/queries/useAuth';
import { SessionProvider } from '@/store';
import { OnboardingProvider, useOnboarding } from '@/store/useOnboarding';

SplashScreen.preventAutoHideAsync();

function RootInner() {
  const { isLoginLoading, isLogin } = useAuth();
  const { showOnBoarding } = useOnboarding();
  const router = useRouter();

  const [loaded, error] = useFonts({
    Pretendard: require('../assets/fonts/Pretendard-Regular.otf'),
    'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold.otf'),
    'Pretendard-SemiBold': require('../assets/fonts/Pretendard-SemiBold.otf'),
    'Pretendard-Medium': require('../assets/fonts/Pretendard-Medium.otf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded && !isLoginLoading) {
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 500);
    }
  }, [isLoginLoading]);

  useEffect(() => {
    if (isLogin) {
      router.replace(SITE_URLS.MAIN);
    } else if (showOnBoarding) {
      router.replace(SITE_URLS.ON_BOARDING);
    } else {
      router.replace(SITE_URLS.SIGN_IN);
    }
  }, [isLogin, router, showOnBoarding]);

  return <Slot />;
}

export default function Root() {
  if (Platform.OS === 'web') {
    return (
      <Provider>
        <SessionProvider>
          <OnboardingProvider>
            <S.Container>
              <S.Layout>
                <RootInner />
              </S.Layout>
            </S.Container>
          </OnboardingProvider>
        </SessionProvider>
      </Provider>
    );
  }

  return (
    <Provider>
      <SessionProvider>
        <OnboardingProvider>
          <RootInner />
        </OnboardingProvider>
      </SessionProvider>
    </Provider>
  );
}

const S = {
  Container: styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100dvh;
  `,
  Layout: styled.View`
    flex: 1;
    width: ${SCREEN_SIZE.WEB_WIDTH + 'px'};
    height: 100dvh;
  `,
};
