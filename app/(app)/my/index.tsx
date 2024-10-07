import { SafeAreaView } from 'react-native';

import MenuList from '@/components/mypage/MenuList';
import Profile from '@/components/mypage/Profile';
import { color } from '@/styles/theme';

function My() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.Background.Alternative }}>
      <Profile
        uri='https://avatars.githubusercontent.com/u/79398566?v=4'
        name='김소현'
        job='개발자'
      />
      <MenuList />
    </SafeAreaView>
  );
}

export default My;
