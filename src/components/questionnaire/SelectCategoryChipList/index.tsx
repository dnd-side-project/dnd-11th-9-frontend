import CustomLayout from '@/components/common/custom-layout';
import ErrorText from '@/components/common/error-text';
import Category from '@/components/questionnaire/category';
import type { EngCategoryType } from '@/enums/categoryEnum';
import { CategoryEnum } from '@/enums/categoryEnum';

import * as S from './style';

type Props = {
  item: string[];
  addItem: (item: EngCategoryType) => void;
  removeItem: (item: EngCategoryType) => void;
  error: string | null;
};

function SelectCategoryChipList({ item, addItem, removeItem, error }: Props) {
  const isActive = (category: EngCategoryType) => item.includes(category);
  return (
    <S.Container>
      <S.Wrapper>
        <Category
          category={CategoryEnum.SKILL}
          isActive={isActive('SKILL')}
          onPress={() => (isActive('SKILL') ? removeItem('SKILL') : addItem('SKILL'))}
        />
        <Category
          category={CategoryEnum.DILIGENCE}
          isActive={isActive('DILIGENCE')}
          onPress={() => (isActive('DILIGENCE') ? removeItem('DILIGENCE') : addItem('DILIGENCE'))}
        />
        <Category
          category={CategoryEnum.CONSIDERATION}
          isActive={isActive('CONSIDERATION')}
          onPress={() =>
            isActive('CONSIDERATION') ? removeItem('CONSIDERATION') : addItem('CONSIDERATION')
          }
        />
        <Category
          category={CategoryEnum.IDEATION}
          isActive={isActive('IDEATION')}
          onPress={() => (isActive('IDEATION') ? removeItem('IDEATION') : addItem('IDEATION'))}
        />
        <Category
          category={CategoryEnum.DOCUMENTATION}
          isActive={isActive('DOCUMENTATION')}
          onPress={() =>
            isActive('DOCUMENTATION') ? removeItem('DOCUMENTATION') : addItem('DOCUMENTATION')
          }
        />
        <Category
          category={CategoryEnum.PROBLEM_SOLVING}
          isActive={isActive('PROBLEM_SOLVING')}
          onPress={() =>
            isActive('PROBLEM_SOLVING') ? removeItem('PROBLEM_SOLVING') : addItem('PROBLEM_SOLVING')
          }
        />
        <Category
          category={CategoryEnum.LEADERSHIP}
          isActive={isActive('LEADERSHIP')}
          onPress={() =>
            isActive('LEADERSHIP') ? removeItem('LEADERSHIP') : addItem('LEADERSHIP')
          }
        />
        <Category
          category={CategoryEnum.FOLLOWERSHIP}
          isActive={isActive('FOLLOWERSHIP')}
          onPress={() =>
            isActive('FOLLOWERSHIP') ? removeItem('FOLLOWERSHIP') : addItem('FOLLOWERSHIP')
          }
        />
        <Category
          category={CategoryEnum.COMMUNICATION}
          isActive={isActive('COMMUNICATION')}
          onPress={() =>
            isActive('COMMUNICATION') ? removeItem('COMMUNICATION') : addItem('COMMUNICATION')
          }
        />
      </S.Wrapper>
      {error && <ErrorText error_message={error} />}
      <CustomLayout.ButtonBox />
    </S.Container>
  );
}

export default SelectCategoryChipList;
