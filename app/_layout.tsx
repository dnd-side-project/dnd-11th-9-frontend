import styled from '@emotion/native';
import { Slot } from 'expo-router';
import { Platform } from 'react-native';

import Provider from '@/components/common/provider';
import { SessionProvider } from '@/store';

export default function Root() {
  if (Platform.OS === 'web') {
    return (
      <Provider>
        <SessionProvider>
          <S.Container>
            <S.Layout>
              <Slot />
            </S.Layout>
          </S.Container>
        </SessionProvider>
      </Provider>
    );
  }

  return (
    <Provider>
      <SessionProvider>
        <Slot />
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
    width: 375px;
    height: 100dvh;
    border: 1px solid black;
  `,
};
