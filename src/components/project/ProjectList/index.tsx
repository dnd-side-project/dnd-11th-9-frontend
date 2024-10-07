import { FlatList } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

import Typography from '@/components/common/typography';
import ProjectItem from '@/components/project/ProjectItem';
import { COMPONENT_SIZE } from '@/constants';

import * as S from './style';

type ProjectDeleteButtonProps = {
  deleteId: string | number;
};

function ProjectDeleteButton({ deleteId }: ProjectDeleteButtonProps) {
  return (
    <S.DeleteButton onPress={() => console.log(deleteId)}>
      <Typography color='#FFFFFF'>삭제하기</Typography>
    </S.DeleteButton>
  );
}

export type ProjectItemType = {
  id: string | number;
  name: string;
  profile: string;
  review_count: number;
  member_num: number;
};

type Props = {
  data: ProjectItemType[];
};

function ProjectList({ data }: Props) {
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        display: 'flex',
        gap: 8,
        padding: 20,
        paddingBottom: COMPONENT_SIZE.BOTTOM_NAV + 20,
      }}
      renderItem={(info) => (
        <GestureHandlerRootView>
          <Swipeable renderRightActions={() => <ProjectDeleteButton deleteId={info.item.id} />}>
            <ProjectItem {...info.item} />
          </Swipeable>
        </GestureHandlerRootView>
      )}
    />
  );
}

export default ProjectList;
