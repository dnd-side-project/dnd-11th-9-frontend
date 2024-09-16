import styled from '@emotion/native';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { Platform } from 'react-native';

import Provider from '@/components/common/provider';
import { SCREEN_SIZE } from '@/constants';
import { SessionProvider } from '@/store';
import { OnboardingProvider } from '@/store/useOnboarding';

SplashScreen.preventAutoHideAsync();

export default function Root() {
  const [loaded, error] = useFonts({
    Pretendard: require('../assets/fonts/Pretendard-Regular.otf'),
    'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold.otf'),
    'Pretendard-SemiBold': require('../assets/fonts/Pretendard-SemiBold.otf'),
    'Pretendard-Medium': require('../assets/fonts/Pretendard-Medium.otf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (loaded) {
    SplashScreen.hideAsync();
  }

  if (!loaded) {
    return null;
  }

  if (Platform.OS === 'web') {
    return (
      <Provider>
        <SessionProvider>
          <OnboardingProvider>
            <S.Container>
              <S.Layout>
                <Slot />
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
          <Slot />
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
    width: ${SCREEN_SIZE.Web + 'px'};
    height: 100dvh;
  `,
};
