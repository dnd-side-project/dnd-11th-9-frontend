import styled from '@emotion/native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';

import SolidButton from '@/components/common/button/SolidButton';
import CustomHeader from '@/components/common/custom-header';
import CustomLayout from '@/components/common/custom-layout';
import Typography from '@/components/common/typography';
import SelectCategoryChipList from '@/components/questionnaire/SelectCategoryChipList';
import { PROJECT_URLS } from '@/constants';
import type { EngCategoryType } from '@/enums/categoryEnum';
import { useTabBarEffect } from '@/hooks';
import { flexDirectionColumn } from '@/styles/common';
import { color } from '@/styles/theme';

const MINIMUM_CATEGORY_COUNT = 5;

function Select() {
  useTabBarEffect();
  const router = useRouter();
  const { id } = useLocalSearchParams() as { id: string };

  const [error, setError] = useState<string | null>(null);
  const [selectedCategoryList, setSelectedCategoryList] = useState<EngCategoryType[]>([]);

  const addCategory = (category: EngCategoryType) => {
    if (error) {
      setError(null);
    }
    setSelectedCategoryList([...selectedCategoryList, category]);
  };

  const removeCategory = (category: EngCategoryType) =>
    setSelectedCategoryList(selectedCategoryList.filter((item) => item !== category));

  const selectCategory = useCallback(() => {
    if (selectedCategoryList.length < MINIMUM_CATEGORY_COUNT) {
      setError('5개를 선택해주세요');
      return;
    }
    router.push({
      pathname: `/project/review/create`,
      params: { id, categories: selectedCategoryList },
    });
  }, [router, id, selectedCategoryList]);

  return (
    <CustomLayout backgroundColor={color.Background.Normal}>
      <CustomHeader
        mt
        title='나의 설문지'
        left={
          <CustomHeader.Button
            onPress={() =>
              router.canGoBack()
                ? router.back()
                : router.replace({ pathname: PROJECT_URLS.DETAIL, params: { id } })
            }>
            <CustomHeader.BackButton />
          </CustomHeader.Button>
        }
      />
      <S.Container>
        <S.TitleContainer>
          <S.ReviewTitle>
            <S.TitleText
              variant='Title3'
              fontWeight='bold'>
              받고 싶은 리뷰의{`\n`}카테고리 5개를 골라주세요
            </S.TitleText>
            <S.SubTitleText
              variant='Label1/Normal'
              fontWeight='medium'>
              카테고리 별로 설문이 구성돼요
            </S.SubTitleText>
          </S.ReviewTitle>

          <SelectCategoryChipList
            item={selectedCategoryList}
            addItem={addCategory}
            removeItem={removeCategory}
            error={error}
          />
        </S.TitleContainer>

        <S.ButtonBox>
          <SolidButton
            onPress={selectCategory}
            full>
            다음
          </SolidButton>
        </S.ButtonBox>
      </S.Container>
    </CustomLayout>
  );
}

const S = {
  Container: styled.View`
    flex: 1;
    justify-content: space-between;
  `,
  TitleContainer: styled.View`
    ${flexDirectionColumn};
    gap: 32px;
    padding-top: 33px;
    padding-horizontal: 20px;
  `,
  ReviewTitle: styled.View`
    ${flexDirectionColumn};
    gap: 8px;
  `,
  ButtonBox: styled.View`
    padding-horizontal: 20px;
    padding-bottom: 52px;
  `,
  TitleText: styled(Typography)`
    color: ${({ theme }) => theme.color.Label.Normal};
  `,
  SubTitleText: styled(Typography)`
    color: ${({ theme }) => theme.color.Label.Alternative};
  `,
};

export default Select;
