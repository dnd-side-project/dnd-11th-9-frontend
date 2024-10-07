import { Text, View } from 'react-native';

import { useSession } from '@/store';
import { useOnboarding } from '@/store/useOnboarding';

function Home() {
  const { signOut } = useSession();
  const { resetOnBoarding } = useOnboarding();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          resetOnBoarding();
          signOut();
        }}>
        Sign Out
      </Text>
    </View>
  );
}

export default Home;
