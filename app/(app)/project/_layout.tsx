import { Stack } from 'expo-router';

import { stackConfig } from '@/config';
import { PROJECT_NAVIGATIONS } from '@/constants';

function Layout() {
  return (
    <Stack screenOptions={stackConfig}>
      <Stack.Screen name={PROJECT_NAVIGATIONS.HOME} />
      <Stack.Screen name={PROJECT_NAVIGATIONS.CREATE} />
      <Stack.Screen name={PROJECT_NAVIGATIONS.DETAIL} />
      <Stack.Screen name={PROJECT_NAVIGATIONS.REVIEW} />
    </Stack>
  );
}

export default Layout;
