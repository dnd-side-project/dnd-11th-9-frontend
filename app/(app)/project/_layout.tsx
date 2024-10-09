import { AntDesign, Feather } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Pressable } from 'react-native';

import { PROJECT_NAVIGATIONS, PROJECT_URLS } from '@/constants';
import { color } from '@/styles/theme';
import { isMobile } from '@/utils';

import * as S from './style';

function Layout() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={() => ({
        headerStyle: { height: 40, backgroundColor: color.Background.Alternative },
        headerTitleStyle: {
          fontFamily: 'Pretendard-Bold',
        },
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      })}>
      <Stack.Screen
        name={PROJECT_NAVIGATIONS.HOME}
        options={{
          title: '프로젝트',
          headerRight: () => (
            <S.ButtonGroup>
              <Pressable>
                <AntDesign
                  name='search1'
                  size={24}
                />
              </Pressable>
              {isMobile && (
                <Pressable onPress={() => router.push(PROJECT_URLS.PROJECT_CREATE)}>
                  <AntDesign
                    name='plus'
                    size={24}
                  />
                </Pressable>
              )}
            </S.ButtonGroup>
          ),
        }}
      />
      <Stack.Screen
        name={PROJECT_NAVIGATIONS.CREATE}
        options={{
          animation: 'flip',
          title: '프로젝트 등록',
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
      <Stack.Screen
        name={PROJECT_NAVIGATIONS.REVIEW}
        options={{ headerShown: false }}
      />
    </Stack>
  );
}

export default Layout;
