import { Link, useLocalSearchParams } from 'expo-router';
import { Suspense } from 'react';

import { MOCK_PROJECT_DETAIL } from '@/__mock__/project';
import CustomHeader from '@/components/common/custom-header';
import CustomLayout from '@/components/common/custom-layout';
import Typography from '@/components/common/typography';
import ProjectDetail from '@/components/project/ProjectDetail';
import { PROJECT_URLS } from '@/constants';
import { useTabBarEffect } from '@/hooks';
import { color } from '@/styles/theme';

type InnerProps = {
  id: string;
};

function Inner({ id }: InnerProps) {
  const data = MOCK_PROJECT_DETAIL;

  return (
    <CustomLayout backgroundColor={color.Background.Alternative}>
      <CustomHeader
        mt
        backgroundColor={color.Background.Alternative}
        title={data.name}
        left={
          <Link
            asChild
            href={{ pathname: PROJECT_URLS.MAIN }}>
            <CustomHeader.Button>
              <CustomHeader.BackButton />
            </CustomHeader.Button>
          </Link>
        }
        right={
          <CustomHeader.Button>
            <Typography
              variant='Body1/Normal'
              fontWeight='medium'
              color={color.Label.Alternative}>
              편집
            </Typography>
          </CustomHeader.Button>
        }
      />
      <ProjectDetail
        id={id}
        data={data}
      />
    </CustomLayout>
  );
}

function Page() {
  const { id } = useLocalSearchParams() as { id: string };
  useTabBarEffect();

  if (!id) {
    return null;
  }

  return (
    <Suspense fallback={<Typography>로딩</Typography>}>
      <Inner id={id} />
    </Suspense>
  );
}

export default Page;
