import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';

export function useAppOpen() {
  const [loaded, error] = useFonts({
    Pretendard: require('../../assets/fonts/Pretendard-Regular.otf'),
    'Pretendard-Bold': require('../../assets/fonts/Pretendard-Bold.otf'),
    'Pretendard-SemiBold': require('../../assets/fonts/Pretendard-SemiBold.otf'),
    'Pretendard-Medium': require('../../assets/fonts/Pretendard-Medium.otf'),
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

  return [loaded, error];
}
