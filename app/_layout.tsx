import styled from '@emotion/native';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { Platform } from 'react-native';

import { Provider } from '@/components/common/provider';

export default function Root() {
  const [loaded] = useFonts({
    Pretendard: require('../assets/fonts/Pretendard-Regular.otf'),
    'Pretendard-Black': require('../assets/fonts/Pretendard-Black.otf'),
    'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold.otf'),
    'Pretendard-ExtraBold': require('../assets/fonts/Pretendard-ExtraBold.otf'),
    'Pretendard-ExtraLight': require('../assets/fonts/Pretendard-ExtraLight.otf'),
    'Pretendard-Light': require('../assets/fonts/Pretendard-Light.otf'),
    'Pretendard-Medium': require('../assets/fonts/Pretendard-Medium.otf'),
    'Pretendard-SemiBold': require('../assets/fonts/Pretendard-SemiBold.otf'),
    'Pretendard-Thin': require('../assets/fonts/Pretendard-Thin.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  if (Platform.OS === 'web') {
    return (
      <Provider>
        <S.Container>
          <S.Layout>
            <Slot />
          </S.Layout>
        </S.Container>
      </Provider>
    );
  }

  return (
    <Provider>
      <Slot />
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
