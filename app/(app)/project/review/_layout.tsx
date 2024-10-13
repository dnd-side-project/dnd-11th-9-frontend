import { Stack } from 'expo-router';

import { stackConfig } from '@/config';
import { REVIEW_NAVIGATIONS } from '@/constants';

function Layout() {
  return (
    <Stack screenOptions={stackConfig}>
      <Stack.Screen name={REVIEW_NAVIGATIONS.CREATE} />
      <Stack.Screen name={REVIEW_NAVIGATIONS.SELECT} />
      <Stack.Screen name={REVIEW_NAVIGATIONS.COMPLETE} />
    </Stack>
  );
}

export default Layout;
