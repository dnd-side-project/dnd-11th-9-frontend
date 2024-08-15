import { Stack } from 'expo-router';

function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{ title: '마이 페이지' }}
      />
    </Stack>
  );
}

export default Layout;
