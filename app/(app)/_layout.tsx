import styled from '@emotion/native';
import { AntDesign, Octicons, SimpleLineIcons } from '@expo/vector-icons';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Redirect, Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

import { Typography } from '@/components/common/typography';
import type { MainNavigations } from '@/constants';
import { MAIN_NAVIGATIONS } from '@/constants';
import { SITE_URLS } from '@/constants';
import { useSession } from '@/store';

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
  [MAIN_NAVIGATIONS.REVIEW]: {
    label: '리뷰',
    icon: (color: string) => (
      <SimpleLineIcons
        size={28}
        name='fire'
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
  return (
    <S.TabBar>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name as MainNavigations;

        const isFocused = state.index === index;

        if (route.name === 'alarm' || typeof label === 'function') {
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
            onLongPress={onLongPress}
            style={{ flex: 1 }}>
            {tabBarOptions[label].icon(isFocused ? '#000000' : '#cccccc')}
            <Typography
              variant='Subtitle3'
              style={{ color: isFocused ? '#000000' : '#cccccc' }}>
              {tabBarOptions[label].label}
            </Typography>
          </S.TabBarItem>
        );
      })}
    </S.TabBar>
  );
};

export default function Layout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href={SITE_URLS.SIGN_IN} />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(tabBar) => <TabBar {...tabBar} />}>
      <Tabs.Screen name={MAIN_NAVIGATIONS.PROJECT} />
      <Tabs.Screen name={MAIN_NAVIGATIONS.HOME} />
      <Tabs.Screen name={MAIN_NAVIGATIONS.REVIEW} />
      <Tabs.Screen name={MAIN_NAVIGATIONS.MY} />
    </Tabs>
  );
}

const S = {
  TabBar: styled.View`
    position: absolute;
    bottom: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 12px 0 24px;
  `,
  TabBarItem: styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    gap: 4px;
  `,
};
