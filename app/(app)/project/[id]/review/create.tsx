import styled from '@emotion/native';
import { useCallback, useState } from 'react';

import SolidButton from '@/components/common/button/SolidButton';
import Typography from '@/components/common/typography';
import SelectCategoryChipList from '@/components/questionnaire/SelectCategoryChipList';
import { useTabBarEffect } from '@/hooks';
import { flexDirectionColumn } from '@/styles/common';

const MINIMUM_CATEGORY_COUNT = 5;

function Review() {
  useTabBarEffect();
  // const { id } = useLocalSearchParams<{ id: string }>();

  const [error, setError] = useState<string | null>(null);
  const [selectedCategoryList, setSelectedCategoryList] = useState<string[]>([]);

  const addCategory = (category: string) => {
    if (error) {
      setError(null);
    }
    setSelectedCategoryList([...selectedCategoryList, category]);
  };
  const removeCategory = (category: string) =>
    setSelectedCategoryList(selectedCategoryList.filter((item) => item !== category));

  const selectCategory = useCallback(() => {
    if (selectedCategoryList.length < MINIMUM_CATEGORY_COUNT) {
      setError('5개를 선택해주세요');
      return;
    }
    setError(null);
  }, [selectedCategoryList]);

  return (
    <S.Container>
      <S.WrapperBox>
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
      </S.WrapperBox>

      <SolidButton
        onPress={selectCategory}
        full>
        다음
      </SolidButton>
    </S.Container>
  );
}

const S = {
  Container: styled.SafeAreaView`
    flex: 1;
    gap: 32px;
    justify-content: space-between;
    padding: 33px 20px 52px;
    background: ${({ theme }) => theme.color.Background.Normal};
  `,
  WrapperBox: styled.View`
    ${flexDirectionColumn};
    gap: 32px;
  `,
  ReviewTitle: styled.View`
    ${flexDirectionColumn};
    gap: 8px;
  `,
  TitleText: styled(Typography)`
    color: ${({ theme }) => theme.color.Label.Normal};
  `,
  SubTitleText: styled(Typography)`
    color: ${({ theme }) => theme.color.Label.Alternative};
  `,
};

export default Review;
