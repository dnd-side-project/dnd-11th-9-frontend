import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';

import type { ProjectDTO } from '@/apis/project/project.type';
import Typography from '@/components/common/typography';
import ProjectImage from '@/components/project/ProjectImage';
import { COMPONENT_SIZE } from '@/constants';
import { color } from '@/styles/theme';

import * as S from './ProjectList.style';

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

type OneProjectProps = ProjectDTO;

function OneProject({
  member_num,
  profile,
  name,
}: Pick<OneProjectProps, 'id' | 'name' | 'profile' | 'member_num'>) {
  const [active, setActive] = useState(() => false);

  const activeStyle = useAnimatedStyle(() => ({
    paddingTop: withTiming(active ? 20 : 0),
    paddingBottom: withTiming(active ? 20 : 0),
    height: withTiming(active ? 64 : 0),
  }));

  return (
    <S.ProjectContainer>
      <S.ProjectInActiveBox>
        <S.ProjectInfoBox>
          <ProjectImage uri={profile} />
          <S.ProjectStatusBox>
            <Typography
              variant='Body1/Normal'
              fontWeight='medium'
              color={color.Label.Normal}>
              {name}
            </Typography>
            <Typography
              variant='Label1/Normal'
              color={color.Label.Alternative}>
              {member_num}명
            </Typography>
          </S.ProjectStatusBox>
        </S.ProjectInfoBox>
        <Pressable onPress={() => setActive((prev) => !prev)}>
          {active ? (
            <Ionicons
              name='chevron-up'
              color={color.Label.Neutral}
              size={24}
            />
          ) : (
            <Ionicons
              name='chevron-down'
              color={color.Label.Neutral}
              size={24}
            />
          )}
        </Pressable>
      </S.ProjectInActiveBox>
      {active ? <S.ProjectActiveDivider /> : null}
      <S.ProjectActiveBox style={activeStyle}>
        <Typography
          variant='Body1/Normal'
          fontWeight='medium'
          style={{ textAlign: 'center' }}>
          리뷰 만들기
        </Typography>
      </S.ProjectActiveBox>
    </S.ProjectContainer>
  );
}

type Props = {
  data: Pick<ProjectDTO, 'id' | 'name' | 'profile' | 'member_num'>[];
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
            <OneProject {...info.item} />
          </Swipeable>
        </GestureHandlerRootView>
      )}
    />
  );
}

export default ProjectList;
