import styled from '@emotion/native';
import dayjs from 'dayjs';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Suspense, useCallback, useState } from 'react';
import { View } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import type { QuestionType } from '@/apis/questionnaire/type';
import SolidButton from '@/components/common/button/SolidButton';
import CustomHeader from '@/components/common/custom-header';
import CustomLayout from '@/components/common/custom-layout';
import ConfirmModal from '@/components/common/modal/ConfirmModal';
import Typography from '@/components/common/typography';
import CreateReviewList from '@/components/review/CreateReviewList';
import { COMPONENT_SIZE, REVIEW_NAVIGATIONS, REVIEW_URLS } from '@/constants';
import type { EngCategoryType } from '@/enums/categoryEnum';
import useGetCategory from '@/hooks/queries/useGetCategory';
import { color } from '@/styles/theme';
import { distributeItems, getSize } from '@/utils';

type WrapperProps = {
  id: string;
  categories: EngCategoryType[];
};

const GRADIENT_COLRORS = ['#FFE58E', '#AAC5FF'];
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
  const router = useRouter();
  const {
    data: { allQuestions },
  } = useGetCategory(categories);

  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const [selectedQuestions, setSelectedQuestions] = useState<QuestionType[]>(() =>
    assignQuestionsToCategories(allQuestions)
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
  const scrollX = useSharedValue(0);

  // 스크롤 이벤트 핸들러로 scrollX 값을 업데이트
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  // 그라데이션 배경을 스크롤에 따라 움직이도록 스타일 정의
  const animatedGradientStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: scrollX.value * -0.2, // 배경 이동을 더 부드럽게 조정
        },
      ],
    };
  });

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
        <S.GradientBackground
          style={[
            {
              height: getSize.screenHeight,
              width: getSize.screenWidth * 4 + getSize.screenWidth - 150,
            },
            animatedGradientStyle,
          ]}>
          <LinearGradient
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            colors={GRADIENT_COLRORS}
            style={{ flex: 1 }}
          />
        </S.GradientBackground>

        <CreateReviewList
          scrollHandler={scrollHandler}
          selectedQuestions={selectedQuestions}
          getRandomNewQuestion={getRandomNewQuestion}
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
  `,
  ButtonWrapper: styled.View`
    padding: 12px 20px 52px;
  `,
  GuideTextWrapper: styled.View`
    padding: 20px;
  `,
  GradientBackground: styled(Animated.View)`
    position: absolute;
    top: 1px;
    z-index: -1;
    width: ${getSize.deviceWidth * 2}px;
    height: ${getSize.deviceHeight - 55 - COMPONENT_SIZE.STATUSBAR}px;
  `,
};

export default Create;
