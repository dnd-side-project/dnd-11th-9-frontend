import styled from '@emotion/native';
import { Slot } from 'expo-router';
import { Platform } from 'react-native';

import Provider from '@/components/common/provider';
import { SCREEN_SIZE } from '@/constants';
import { SessionProvider } from '@/store';
import { OnboardingProvider } from '@/store/useOnboarding';

export default function Root() {
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
