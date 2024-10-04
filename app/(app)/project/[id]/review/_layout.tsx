import { Feather } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Pressable } from 'react-native';

import { PROJECT_URLS, REVIEW_NAVIGATIONS } from '@/constants';
import { color } from '@/styles/theme';

function Layout() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={() => ({
        headerStyle: { height: 40, backgroundColor: color.Background.Normal },
        headerTitleStyle: {
          paddingTop: 12,
          fontFamily: 'Pretendard-Bold',
        },
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      })}>
      <Stack.Screen
        name={REVIEW_NAVIGATIONS.HOME}
        options={{
          title: '나의 설문지',
          headerLeft: ({ canGoBack }) => (
            <Pressable
              onPress={() => (canGoBack ? router.back() : router.push(PROJECT_URLS.PROJECT_HOME))}>
              <Feather
                name='chevron-left'
                size={24}
              />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name={REVIEW_NAVIGATIONS.CREATE} />
    </Stack>
  );
}

export default Layout;
