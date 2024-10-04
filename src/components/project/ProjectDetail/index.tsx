import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView } from 'react-native';

import SolidButton from '@/components/common/button/SolidButton';
import SlideBar from '@/components/common/slide-bar';
import Typography from '@/components/common/typography';
import { COMPONENT_SIZE, PROJECT_URLS } from '@/constants';
import { shadow } from '@/styles/shadow';
import { color } from '@/styles/theme';
import { getSize } from '@/utils';

import * as S from './style';

export type ProjectDetailType = {
  id: number;
  name: string;
  description: string;
  profile: string;
  startDate: string;
  endDate: string;
  hasReviewCard: boolean;
  review_count: number;
  userList: UserType[];
  link: string;
};

type UserType = {
  id: number;
  name: string;
};

type Props = {
  id: string;
  data: ProjectDetailType;
};

function ProjectDetail({ id, data }: Props) {
  return (
    <ScrollView
      style={{
        marginBottom: COMPONENT_SIZE.BOTTOM_NAV,
        flex: 1,
        backgroundColor: color.Background.Alternative,
        height: getSize.screenHeight,
      }}>
      <S.Container>
        <S.ProjectCard>
          <S.ProjectImage
            style={shadow[0]}
            source={{ uri: data.profile }}
          />
          <S.ProjectIntro>
            <Typography
              variant='Heading1'
              fontWeight='semiBold'
              color={color.Label.Strong}>
              {data.name}
            </Typography>
            <Typography
              variant='Body1/Normal'
              fontWeight='medium'
              color={color.Label.Strong}>
              {data.description}
            </Typography>
          </S.ProjectIntro>
        </S.ProjectCard>

        <S.ProjectItem>
          <Typography
            variant='Body1/Normal'
            color={color.Label.Neutral}>
            기간
          </Typography>
          <S.DateBox style={shadow[0]}>
            <AntDesign
              name='calendar'
              size={20}
            />
            <Typography
              variant='Body1/Reading'
              fontWeight='medium'
              color={color.Label.Strong}>
              {data.startDate} - {data.endDate}
            </Typography>
          </S.DateBox>
        </S.ProjectItem>

        <S.ProjectItem>
          <Typography
            variant='Body1/Normal'
            color={color.Label.Neutral}>
            팀원
          </Typography>
          <S.ProjectTeamBox>
            <S.SlideBarContainer style={shadow[0]}>
              <S.SlideBarBox>
                <SlideBar
                  max_value={data.userList.length}
                  current_value={data.review_count}
                />
              </S.SlideBarBox>
              <S.SlideValueText>
                <Typography
                  variant='Caption1'
                  color={data.review_count === 0 ? color.Label.Assistive : color.Primary.Normal}>
                  {data.review_count}
                </Typography>
                <Typography
                  variant='Caption1'
                  color={color.Label.Assistive}>
                  /{data.userList.length}
                </Typography>
              </S.SlideValueText>
            </S.SlideBarContainer>
            <S.ProjectUserList>
              {data.userList.map((user) => (
                <S.ProjectUser
                  style={shadow[0]}
                  key={user.id}>
                  <Typography
                    variant='Body1/Reading'
                    fontWeight='medium'
                    color={color.Label.Strong}>
                    {user.name}
                  </Typography>
                </S.ProjectUser>
              ))}
            </S.ProjectUserList>
          </S.ProjectTeamBox>
        </S.ProjectItem>

        <S.ProjectItem>
          <Typography
            variant='Body1/Normal'
            color={color.Label.Neutral}>
            프로젝트 링크
          </Typography>
          <S.LinkBox style={shadow[0]}>
            <Typography
              variant='Body1/Reading'
              fontWeight='medium'
              color={color.Label.Strong}>
              {data.link}
            </Typography>
          </S.LinkBox>
        </S.ProjectItem>

        <SolidButton
          onPress={() => router.push({ pathname: PROJECT_URLS.PROJECT_REVIEW, params: { id } })}
          full>
          설문지 만들기
        </SolidButton>
      </S.Container>
    </ScrollView>
  );
}

export default ProjectDetail;
