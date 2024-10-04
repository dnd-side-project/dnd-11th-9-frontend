import ErrorText from '@/components/common/error-text';
import Category from '@/components/questionnaire/category';

import * as S from './style';

type Props = {
  item: string[];
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
  error: string | null;
};

function SelectCategoryChipList({ item, addItem, removeItem, error }: Props) {
  const isActive = (category: string) => item.includes(category);
  return (
    <S.Container>
      <S.Wrapper>
        <Category
          category='기술'
          isActive={isActive('기술')}
          onPress={() => (isActive('기술') ? removeItem('기술') : addItem('기술'))}
        />
        <Category
          category='성실성'
          isActive={isActive('성실성')}
          onPress={() => (isActive('성실성') ? removeItem('성실성') : addItem('성실성'))}
        />
        <Category
          category='배려심'
          isActive={isActive('배려심')}
          onPress={() => (isActive('배려심') ? removeItem('배려심') : addItem('배려심'))}
        />
        <Category
          category='아이데이션'
          isActive={isActive('아이데이션')}
          onPress={() =>
            isActive('아이데이션') ? removeItem('아이데이션') : addItem('아이데이션')
          }
        />
        <Category
          category='문서화'
          isActive={isActive('문서화')}
          onPress={() => (isActive('문서화') ? removeItem('문서화') : addItem('문서화'))}
        />
        <Category
          category='문제해결'
          isActive={isActive('문제해결')}
          onPress={() => (isActive('문제해결') ? removeItem('문제해결') : addItem('문제해결'))}
        />
        <Category
          category='리더십'
          isActive={isActive('리더십')}
          onPress={() => (isActive('리더십') ? removeItem('리더십') : addItem('리더십'))}
        />
        <Category
          category='팔로워십'
          isActive={isActive('팔로워십')}
          onPress={() => (isActive('팔로워십') ? removeItem('팔로워십') : addItem('팔로워십'))}
        />
        <Category
          category='커뮤니케이션'
          isActive={isActive('커뮤니케이션')}
          onPress={() =>
            isActive('커뮤니케이션') ? removeItem('커뮤니케이션') : addItem('커뮤니케이션')
          }
        />
      </S.Wrapper>
      {error && <ErrorText error_message={error} />}
    </S.Container>
  );
}

export default SelectCategoryChipList;
