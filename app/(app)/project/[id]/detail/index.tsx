import { Feather } from '@expo/vector-icons';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { useLayoutEffect } from 'react';
import { Platform, Pressable } from 'react-native';

import { MOCK_PROJECT_DETAIL } from '@/__mock__/project';
import Typography from '@/components/common/typography';
import ProjectDetail from '@/components/project/ProjectDetail';
import { PROJECT_URLS } from '@/constants';
import { color } from '@/styles/theme';

function Page() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const data = MOCK_PROJECT_DETAIL;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        paddingTop: 12,
      },
      headerTitle: data.name,
      headerTintColor: color.Label.Normal,
      headerTitleStyle: {
        fontWeight: 600,
        fontFamily: 'Pretendard-SemiBold',
        fontSize: 18,
        lineHeight: 26,
      },
      headerLeft: () => (
        <Pressable onPress={router.back}>
          <Feather
            name='chevron-left'
            size={24}
          />
        </Pressable>
      ),
      headerRight: () =>
        Platform.OS !== 'web' ? (
          <Pressable onPress={() => router.push(PROJECT_URLS.PROJECT_CREATE)}>
            <Typography
              variant='Body1/Normal'
              fontWeight='medium'
              color={color.Label.Alternative}>
              편집
            </Typography>
          </Pressable>
        ) : null,
    });
  }, [data.name, navigation, router]);

  if (!id) {
    return null;
  }

  return (
    <ProjectDetail
      id={id}
      data={data}
    />
  );
}

export default Page;
