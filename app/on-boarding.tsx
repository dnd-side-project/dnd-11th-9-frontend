import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { SITE_URLS } from '@/constants';
import { useSession } from '@/store';

export default function OnBoarding() {
  const { signIn } = useSession();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          signIn();
          router.replace(SITE_URLS.MAIN);
        }}>
        Sign In
      </Text>
    </View>
  );
}
