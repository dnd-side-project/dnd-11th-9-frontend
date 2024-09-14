import { Stack } from 'expo-router';

import { PROJECT_NAVIGATIONS } from '@/constants';

function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name={PROJECT_NAVIGATIONS.HOME}
        options={{
          title: '프로젝트',
          headerTitleStyle: {
            fontFamily: 'Pretendard',
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name={PROJECT_NAVIGATIONS.CREATE}
        options={{
          title: '프로젝트 등록',
          headerTitleStyle: {
            fontFamily: 'Pretendard',
            fontWeight: 'bold',
          },
        }}
      />
    </Stack>
  );
}

export default Layout;
