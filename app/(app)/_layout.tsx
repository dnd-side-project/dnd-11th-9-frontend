import styled from '@emotion/native';
import { AntDesign, Octicons, SimpleLineIcons } from '@expo/vector-icons';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Redirect, Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

import Typography from '@/components/common/typography';
import type { MainNavigations } from '@/constants';
import { MAIN_NAVIGATIONS } from '@/constants';
import { SITE_URLS } from '@/constants';
import { useSession } from '@/store';
import { useOnboarding } from '@/store/useOnboarding';
import useTabBar from '@/store/useTabBar';
import { flexDirectionRow, flexItemCenter } from '@/styles/common';
import { color } from '@/styles/theme';

const tabBarOptions = {
  [MAIN_NAVIGATIONS.HOME]: {
    label: '홈',
    icon: (color: string) => (
      <SimpleLineIcons
        size={28}
        name='home'
        color={color}
      />
    ),
  },
  [MAIN_NAVIGATIONS.PROJECT]: {
    label: '프로젝트',
    icon: (color: string) => (
      <Octicons
        size={28}
        name='project'
        color={color}
      />
    ),
  },
  [MAIN_NAVIGATIONS.MY]: {
    label: '마이',
    icon: (color: string) => (
      <AntDesign
        size={28}
        name='user'
        color={color}
      />
    ),
  },
};

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const isVisible = useTabBar((state) => state.isVisible);

  if (!isVisible) {
    return null;
  }

  return (
    <S.TabBar>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name as MainNavigations;

        const isFocused = state.index === index;

        if (route.name === 'alarm' || typeof label === 'function' || !tabBarOptions[label]) {
          return null;
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <S.TabBarItem
            key={index}
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            {tabBarOptions[label].icon(isFocused ? color.Common['0'] : '#cccccc')}
            <S.TabBarText
              $isFocused={isFocused}
              variant='Caption2'>
              {tabBarOptions[label].label}
            </S.TabBarText>
          </S.TabBarItem>
        );
      })}
    </S.TabBar>
  );
};

export default function Layout() {
  const { refreshToken, isLoading: sessionLoading } = useSession();
  const { showOnBoarding, isLoading: onboardingLoading } = useOnboarding();

  if (sessionLoading || onboardingLoading) {
    return <Text>Loading...</Text>;
  }

  if (!refreshToken) {
    if (!showOnBoarding) {
      return <Redirect href={SITE_URLS.ON_BOARDING} />;
    }
    return <Redirect href={SITE_URLS.SIGN_IN} />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
        headerStyle: {
          backgroundColor: color.Background.Alternative,
        },
      }}
      tabBar={(tabBar) => <TabBar {...tabBar} />}>
      <Tabs.Screen name={MAIN_NAVIGATIONS.PROJECT} />
      <Tabs.Screen name={MAIN_NAVIGATIONS.HOME} />
      <Tabs.Screen name={MAIN_NAVIGATIONS.MY} />
    </Tabs>
  );
}

const S = {
  TabBar: styled.View`
    ${flexDirectionRow};
    position: absolute;
    bottom: 0;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px 0 24px;
    background-color: white;
  `,
  TabBarItem: styled.TouchableOpacity`
    ${flexItemCenter};
    flex: 1;
    gap: 4px;
  `,
  TabBarText: styled(Typography)<{ $isFocused: boolean }>`
    color: ${({ $isFocused }) => ($isFocused ? '#000000' : '#cccccc')};
  `,
};
