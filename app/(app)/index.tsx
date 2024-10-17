import { Text, View } from 'react-native';

import useAuth from '@/hooks/queries/useAuth';
import { useSession } from '@/store';
import { useOnboarding } from '@/store/useOnboarding';

function Home() {
  const { signOut, refreshToken } = useSession();
  const { resetOnBoarding } = useOnboarding();
  const { isLogin } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          resetOnBoarding();
          signOut();
        }}>
        Sign Out
      </Text>
      <Text>{refreshToken}</Text>
      <Text>{isLogin.toString()}</Text>
    </View>
  );
}

export default Home;
