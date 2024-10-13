import styled from '@emotion/native';
import type { ScrollHandlerProcessed } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

import type { QuestionnaireType, QuestionType } from '@/apis/questionnaire/type';
import ResetIcon from '@/components/common/icon/reset-icon';
import Typography from '@/components/common/typography';
import CategoryChip from '@/components/questionnaire/category-chip';
import type { EngCategoryType } from '@/enums/categoryEnum';
import { CategoryEnum } from '@/enums/categoryEnum';
import {
  flexDirectionColumn,
  flexDirectionColumnItemsCenter,
  flexDirectionRowItemsCenter,
} from '@/styles/common';
import { color } from '@/styles/theme';
import { getSize } from '@/utils';

type Props = {
  scrollHandler: ScrollHandlerProcessed<Record<string, unknown>>;
  selectedQuestions: QuestionType[];
  getRandomNewQuestion: (categoryType: EngCategoryType, questionId: number) => void;
};

type ReviewItemProps = {
  onResetClick: () => void;
  listLength: number;
  categoryType: EngCategoryType;
  question: QuestionnaireType;
  index: number;
};

function ReviewItem({ onResetClick, question, categoryType, listLength, index }: ReviewItemProps) {
  return (
    <S.ItemLayout>
      <S.ItemBox>
        <S.ChipContainer>
          <CategoryChip category={CategoryEnum[categoryType]} />
          <S.IndexChip>
            <Typography
              color='#1D212C'
              variant='Label1/Reading'>
              {index} of {listLength}
            </Typography>
          </S.IndexChip>
        </S.ChipContainer>

        <S.ActionButtonContainer>
          <S.ActionButton onPress={onResetClick}>
            <ResetIcon
              size={24}
              fill={color.Label.Alternative}
            />
          </S.ActionButton>
        </S.ActionButtonContainer>
      </S.ItemBox>

      <Typography
        variant='Headline1'
        fontWeight='semiBold'>
        {question.question.replace('${username}', '00 ')}
      </Typography>

      <S.QuestionContainer>
        {question.options.map((option, index) => (
          <S.QuestionItem key={index}>
            <Typography>{option.content}</Typography>
          </S.QuestionItem>
        ))}
      </S.QuestionContainer>
    </S.ItemLayout>
  );
}

function CreateReviewList({ scrollHandler, selectedQuestions, getRandomNewQuestion }: Props) {
  const list = selectedQuestions.flatMap((category) =>
    category.questions.map((question) => ({
      categoryType: category.categoryType,
      question,
    }))
  );

  return (
    <S.Layout>
      <Animated.ScrollView
        indicatorStyle='black'
        bounces={false}
        contentContainerStyle={{
          gap: 20,
          marginBottom: 20,
        }}
        onScroll={scrollHandler}
        snapToOffsets={Array.from(
          { length: list.length },
          (_, i) => i * (getSize.screenWidth - 20)
        )}
        scrollEventThrottle={16}
        horizontal>
        {list.map(({ categoryType, question }, index) => (
          <ReviewItem
            onResetClick={() => getRandomNewQuestion(categoryType, question.questionId)}
            key={question.questionId}
            listLength={list.length}
            categoryType={categoryType}
            question={question}
            index={index + 1}
          />
        ))}
      </Animated.ScrollView>
    </S.Layout>
  );
}

// 스타일 정의
const S = {
  Layout: styled.View`
    display: flex;
    flex-direction: column;
    margin: 20px;
  `,
  ItemLayout: styled.View`
    ${flexDirectionColumn};
    gap: 16px;
    width: ${getSize.screenWidth - 40 + 'px'};
    height: 456px;
    padding: 24px;
    background: ${({ theme }) => theme.color.Background.Normal};
    border-radius: 12px;
  `,
  ItemBox: styled.View`
    ${flexDirectionRowItemsCenter};
    justify-content: space-between;
  `,
  IndexChip: styled.View`
    align-self: flex-start;
    width: fit-content;
    padding: 5px 10px;
    background-color: ${({ theme }) => theme.color.CoolNeutral['99']};
    border: 1px solid ${({ theme }) => theme.color.CoolNeutral['97']};
    border-radius: 3px;
  `,
  ChipContainer: styled.View`
    ${flexDirectionRowItemsCenter};
    gap: 8px;
  `,
  ActionButtonContainer: styled.View`
    ${flexDirectionRowItemsCenter};
    gap: 4px;
  `,
  ActionButton: styled.Pressable`
    width: 24px;
    height: 24px;
  `,
  QuestionContainer: styled.View`
    ${flexDirectionColumnItemsCenter};
    gap: 6px;
  `,
  QuestionItem: styled.View`
    width: 100%;
    height: 68px;
    ${flexDirectionRowItemsCenter};
    padding: 14px 20px;
    background: ${({ theme }) => theme.color.Background.Normal};
    border: 1px solid ${({ theme }) => theme.color.Line.Normal};
    border-radius: 8px;
  `,
};

export default CreateReviewList;
