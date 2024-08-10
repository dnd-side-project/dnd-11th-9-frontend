import { Stack } from 'expo-router';

function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{ title: '알람 설정' }}
      />
    </Stack>
  );
}

export default Layout;
