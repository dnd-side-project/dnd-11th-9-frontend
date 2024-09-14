import { useEffect } from 'react';
import { Text, View } from 'react-native';

import { getProfile } from '@/apis/auth';
import { useSession } from '@/store';
import { useOnboarding } from '@/store/useOnboarding';

function Home() {
  const { signOut } = useSession();
  const { resetOnBoarding } = useOnboarding();
  useEffect(() => {
    getProfile()
      .then((res) => res.data)
      .then(console.log);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          signOut();
          resetOnBoarding();
        }}>
        Sign Out
      </Text>
    </View>
  );
}

export default Home;
