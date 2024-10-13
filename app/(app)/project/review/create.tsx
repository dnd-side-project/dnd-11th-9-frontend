import styled from '@emotion/native';
import dayjs from 'dayjs';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Suspense, useCallback, useState } from 'react';
import { View } from 'react-native';

import type { QuestionType } from '@/apis/questionnaire/type';
import SolidButton from '@/components/common/button/SolidButton';
import CustomHeader from '@/components/common/custom-header';
import CustomLayout from '@/components/common/custom-layout';
import ConfirmModal from '@/components/common/modal/ConfirmModal';
import Typography from '@/components/common/typography';
import CreateReviewList from '@/components/review/CreateReviewList';
import { REVIEW_NAVIGATIONS, REVIEW_URLS } from '@/constants';
import type { EngCategoryType } from '@/enums/categoryEnum';
import useGetCategory from '@/hooks/queries/useGetCategory';
import { color } from '@/styles/theme';
import { distributeItems } from '@/utils';

type WrapperProps = {
  id: string;
  categories: EngCategoryType[];
};

const CREATE_REVIEW_LENGTH = 20;

function assignQuestionsToCategories(categoriesData: QuestionType[]): QuestionType[] {
  const categoryCount = categoriesData.length;
  const distribution = distributeItems(CREATE_REVIEW_LENGTH, categoryCount);
  const result: QuestionType[] = [];

  for (let i = 0; i < categoryCount; i++) {
    const category = categoriesData[i];
    const questionsForThisCategory = category.questions.slice(0, distribution[i]);
    result.push({
      categoryType: category.categoryType,
      questions: questionsForThisCategory,
    });
  }

  return result;
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

function Wrapper({ id, categories }: WrapperProps) {
  const {
    data: { allQuestions },
  } = useGetCategory(categories);

  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const [selectedQuestions, setSelectedQuestions] = useState<QuestionType[]>(() =>
    assignQuestionsToCategories(allQuestions)
  );

  const removeQuestion = useCallback(
    (categoryType: EngCategoryType, questionId: number) => {
      const updatedQuestions = selectedQuestions.map((category) => {
        if (category.categoryType === categoryType) {
          return {
            ...category,
            questions: category.questions.filter((question) => question.questionId !== questionId),
          };
        }
        return category;
      });

      setSelectedQuestions(updatedQuestions);
    },
    [selectedQuestions]
  );

  const getRandomNewQuestion = useCallback(
    (categoryType: EngCategoryType, questionId: number) => {
      const selectedCategory = selectedQuestions.find(
        (category) => category.categoryType === categoryType
      );
      const selectedQuestionIds = selectedCategory
        ? selectedCategory.questions.map((q) => q.questionId)
        : [];

      const categoryInAllQuestions = allQuestions.find(
        (category) => category.categoryType === categoryType
      );
      const availableQuestions = categoryInAllQuestions
        ? categoryInAllQuestions.questions.filter(
            (question) =>
              !selectedQuestionIds.includes(question.questionId) &&
              question.questionId !== questionId
          )
        : [];

      if (availableQuestions.length === 0) {
        throw new Error('No more questions available in this category.');
      }

      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      const newQuestion = availableQuestions[randomIndex];

      const updatedQuestions = selectedQuestions.map((category) => {
        if (category.categoryType === categoryType) {
          return {
            ...category,
            questions: category.questions.map((q) =>
              q.questionId === questionId ? newQuestion : q
            ),
          };
        }
        return category;
      });

      setSelectedQuestions(updatedQuestions);
    },
    [selectedQuestions, allQuestions]
  );

  const router = useRouter();

  return (
    <CustomLayout backgroundColor={color.Background.Normal}>
      <CustomHeader
        mt
        backgroundColor={color.Background.Normal}
        title=' '
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
      <ConfirmModal
        onConfirm={() => router.navigate({ pathname: REVIEW_NAVIGATIONS.COMPLETE, params: { id } })}
        onCancel={() => setConfirmModalVisible(false)}
        visible={confirmModalVisible}
        title='이대로 설문지를 만들까요?'
        description={`${dayjs().add(7, 'day').format('YYYY년 MM월 DD일')}까지 받은 리뷰들로\n명함이 제작돼요`}
      />

      <S.GuideTextWrapper>
        <Typography
          variant='Title3'
          fontWeight='bold'>{`${selectedQuestions.flatMap((item) => item.questions).length}개의 질문을 생성했어요`}</Typography>
        <Typography
          variant='Label1/Normal'
          fontWeight='medium'
          color={color.Label.Alternative}>
          새로고침으로 다른 질문을 불러올 수 있어요
        </Typography>
      </S.GuideTextWrapper>

      <S.ListWrapper>
        <CreateReviewList
          selectedQuestions={selectedQuestions}
          getRandomNewQuestion={getRandomNewQuestion}
          removeQuestion={removeQuestion}
        />
      </S.ListWrapper>

      <S.ButtonWrapper>
        <SolidButton
          onPress={() => router.navigate({ pathname: REVIEW_URLS.COMPLETE, params: { id } })}
          full>
          다음
        </SolidButton>
      </S.ButtonWrapper>
    </CustomLayout>
  );
}

const S = {
  ListWrapper: styled.View`
    flex-grow: 1;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.Background.Alternative};
  `,
  ButtonWrapper: styled.View`
    padding: 12px 20px 52px;
    background-color: ${({ theme }) => theme.color.Background.Alternative};
  `,
  GuideTextWrapper: styled.View`
    padding: 20px;
    background-color: ${({ theme }) => theme.color.Background.Normal};
  `,
};

export default Create;
