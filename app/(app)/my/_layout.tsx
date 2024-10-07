import { Feather } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import { Pressable } from 'react-native';

import { MY_NAVIGATIONS } from '@/constants';
import { color } from '@/styles/theme';
import { isMobile } from '@/utils';

function Layout() {
  return (
    <Stack
      screenOptions={() => ({
        title: '마이페이지',
        headerStyle: { height: 40, backgroundColor: color.Background.Alternative },
        headerTitleStyle: {
          paddingTop: 8,
          paddingBottom: 6,
          fontFamily: 'Pretendard-SemiBold',
        },
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerLeft: ({ canGoBack }) => (
          <Pressable
            onPress={() => (canGoBack ? router.back() : router.push(MY_NAVIGATIONS.HOME))}
            style={{
              paddingLeft: isMobile ? 0 : 20,
              width: 24,
              height: 24,
            }}>
            <Feather
              name='chevron-left'
              size={24}
            />
          </Pressable>
        ),
      })}>
      <Stack.Screen
        name='index'
        options={{ title: '마이페이지', headerLeft: () => null }}
      />
      <Stack.Screen
        name={MY_NAVIGATIONS.JOB}
        options={{
          title: '직군',
        }}
      />
      <Stack.Screen
        name={MY_NAVIGATIONS.POLICY}
        options={{
          title: '서비스 정책',
        }}
      />
      <Stack.Screen name={MY_NAVIGATIONS.CANCEL_ACCOUNT} />
    </Stack>
  );
}

export default Layout;
