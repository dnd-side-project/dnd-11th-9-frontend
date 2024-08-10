import { Redirect, router } from 'expo-router';
import { Text, View } from 'react-native';

import { SITE_URLS } from '@/constants';
import { useSession } from '@/store';

export default function SignIn() {
  const { signIn, session } = useSession();

  if (session) {
    return <Redirect href='/' />;
  }

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
