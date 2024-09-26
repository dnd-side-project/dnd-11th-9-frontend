import { ThemeProvider } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { Platform } from 'react-native';

import queryClient from '@/apis/queryClient';
import { theme } from '@/styles/theme';
import type { PropsNeedChildren } from '@/types';

const Provider = ({ children }: PropsNeedChildren) => {
  const [loaded, error] = useFonts({
    Pretendard: require('../../../../assets/fonts/Pretendard-Regular.otf'),
    'Pretendard-Bold': require('../../../../assets/fonts/Pretendard-Bold.otf'),
    'Pretendard-SemiBold': require('../../../../assets/fonts/Pretendard-SemiBold.otf'),
    'Pretendard-Medium': require('../../../../assets/fonts/Pretendard-Medium.otf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (Platform.OS !== 'web' && loaded) {
    SplashScreen.hideAsync();
  }

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

export default Provider;
