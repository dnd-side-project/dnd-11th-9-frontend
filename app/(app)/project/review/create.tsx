import { useLocalSearchParams, useRouter } from 'expo-router';
import { Suspense } from 'react';
import { View } from 'react-native';

import CustomHeader from '@/components/common/custom-header';
import CustomLayout from '@/components/common/custom-layout';
import Typography from '@/components/common/typography';
import { REVIEW_NAVIGATIONS } from '@/constants';
import type { EngCategoryType } from '@/enums/categoryEnum';
import { color } from '@/styles/theme';

type WrapperProps = {
  id: string;
  categories: EngCategoryType[];
};

function Wrapper({ id }: WrapperProps) {
  const router = useRouter();

  return (
    <CustomLayout backgroundColor={color.Background.Alternative}>
      <CustomHeader
        mt
        backgroundColor={color.Background.Alternative}
        title='나의 설문지'
        left={
          <CustomHeader.Button
            onPress={() =>
              router.canGoBack()
                ? router.back()
                : router.navigate({ pathname: REVIEW_NAVIGATIONS.SELECT, params: { id } })
            }>
            <CustomHeader.BackButton />
          </CustomHeader.Button>
        }
      />
      <Typography>Loading...</Typography>
    </CustomLayout>
  );
}

function Create() {
  const { id, categories } = useLocalSearchParams() as { id: string; categories: string };
  return (
    <Suspense
      fallback={
        <View>
          <Typography>Loading...</Typography>
        </View>
      }>
      <Wrapper
        id={id}
        categories={categories.split(',') as EngCategoryType[]}
      />
    </Suspense>
  );
}

export default Create;
