import styled from '@emotion/native';
import { Slot, SplashScreen } from 'expo-router';
import { Platform } from 'react-native';

import Provider from '@/components/common/provider';
import { SCREEN_SIZE } from '@/constants';
import { useAppOpen } from '@/hooks';
import { SessionProvider } from '@/store';
import { OnboardingProvider } from '@/store/useOnboarding';

SplashScreen.preventAutoHideAsync();

export default function Root() {
  useAppOpen();
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
    width: ${SCREEN_SIZE.WEB_WIDTH + 'px'};
    height: 100dvh;
  `,
};
