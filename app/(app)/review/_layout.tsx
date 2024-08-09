import { Stack } from 'expo-router';
import { fontFace } from 'polished';

function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          title: '리뷰',
          headerTitleStyle: fontFace({
            fontFamily: 'Pretendard',
            fontWeight: 'bold',
          }),
        }}
      />
      <Stack.Screen
        name='create'
        options={{
          title: '프로젝트 등록',
          headerTitleStyle: fontFace({
            fontFamily: 'Pretendard',
            fontWeight: 'bold',
          }),
        }}
      />
    </Stack>
  );
}

export default Layout;
