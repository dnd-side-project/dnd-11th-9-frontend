import styled from '@emotion/native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'react-native';

import SolidButton from '@/components/common/button/SolidButton';
import CustomHeader from '@/components/common/custom-header';
import CustomLayout from '@/components/common/custom-layout';
import Typography from '@/components/common/typography';
import { PROJECT_URLS } from '@/constants';
import { flexDirectionColumnItemsCenter } from '@/styles/common';
import { color } from '@/styles/theme';

function Complete() {
  const router = useRouter();
  const { id } = useLocalSearchParams() as { id: string };
  return (
    <CustomLayout backgroundColor={color.Background.Normal}>
      <CustomHeader
        backgroundColor={color.Background.Normal}
        title=' '
        right={
          <CustomHeader.Button
            onPress={() => router.replace({ pathname: PROJECT_URLS.DETAIL, params: { id } })}>
            <Ionicons
              name='close'
              size={24}
            />
          </CustomHeader.Button>
        }
      />
      <S.Container>
        <Image
          style={{ width: 86, height: 102 }}
          source={require('../../../../assets/images/questionnaire/paper.png')}
        />
        <S.TextContainer>
          <Typography
            style={{ textAlign: 'center' }}
            color='#000'
            variant='Heading1'
            fontWeight='semiBold'>{`설문지가
생성됐어요!`}</Typography>
          <Typography
            style={{ textAlign: 'center' }}
            color={color.Label.Alternative}
            variant='Body2/Normal'
            fontWeight='medium'>
            리뷰를 요청해보세요
          </Typography>
        </S.TextContainer>
      </S.Container>
      <S.ButtonWrapper>
        <SolidButton
          onPress={() => router.replace({ pathname: PROJECT_URLS.DETAIL, params: { id } })}>
          요청하기
        </SolidButton>
      </S.ButtonWrapper>
    </CustomLayout>
  );
}

const S = {
  Container: styled.View`
    flex-grow: 1;
    ${flexDirectionColumnItemsCenter};
    gap: 36px;
  `,
  ButtonWrapper: styled.View`
    padding: 12px 20px 52px;
    background-color: ${({ theme }) => theme.color.Background.Normal};
  `,
  TextContainer: styled.View`
    ${flexDirectionColumnItemsCenter};
    gap: 8px;
  `,
};

export default Complete;
