import type { PropsWithChildren } from 'react';
import { createContext, memo, useContext, useState } from 'react';

import RadioIcon from '@/components/common/icon/radio-icon';
import Typography from '@/components/common/typography';
import { color } from '@/styles/theme';
import type { CategoryType } from '@/types/category';

import CategoryChip from '../category-chip';
import * as S from './style';

type ItemProps = {
  value: string | number;
};

const ListContext = createContext<{
  checkValue: string | null | number;
  setCheckValue: (newValue: string | null | number) => void;
}>({
  checkValue: null,
  setCheckValue: () => null,
});

function Item({ children, value }: PropsWithChildren<ItemProps>) {
  const { checkValue, setCheckValue } = useContext(ListContext);
  const isChecked = checkValue === value;
  return (
    <S.ItemContainer
      onPress={() => setCheckValue(value)}
      $isChecked={isChecked}>
      <S.ItemValue>{children}</S.ItemValue>
      <S.RadioButton>
        <RadioIcon
          activeColor={color.Primary.Normal}
          inActiveColor={color.Line.Normal}
          isChecked={isChecked}
        />
      </S.RadioButton>
    </S.ItemContainer>
  );
}

type QuestionnaireCheckListProps = {
  title: string;
  category: CategoryType;
  initialCheckValue?: string | number;
};

function CheckList({
  title,
  category,
  initialCheckValue,
  children,
}: PropsWithChildren<QuestionnaireCheckListProps>) {
  const [checkValue, setCheckValue] = useState<null | string | number>(() =>
    initialCheckValue ? initialCheckValue : null
  );
  return (
    <ListContext.Provider
      value={{
        checkValue,
        setCheckValue,
      }}>
      <S.Container>
        <CategoryChip category={category} />
        <Typography
          variant='Heading1'
          fontWeight='semiBold'
          color={color.Label.Normal}>
          {title}
        </Typography>
        <S.ListContainer>{children}</S.ListContainer>
      </S.Container>
    </ListContext.Provider>
  );
}

const QuestionnaireCheckList = Object.assign(CheckList, { Item: memo(Item) });

export default QuestionnaireCheckList;
