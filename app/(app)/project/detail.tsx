import styled, { css } from '@emotion/native';
import { AntDesign } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Suspense } from 'react';
import { ScrollView } from 'react-native';

import { MOCK_PROJECT_DETAIL } from '@/__mock__/project';
import SolidButton from '@/components/common/button/SolidButton';
import CustomHeader from '@/components/common/custom-header';
import CustomLayout from '@/components/common/custom-layout';
import SlideBar from '@/components/common/slide-bar';
import Typography from '@/components/common/typography';
import { PROJECT_URLS, REVIEW_URLS } from '@/constants';
import { useTabBarEffect } from '@/hooks';
import {
  flexDirectionColumn,
  flexDirectionRow,
  flexDirectionRowItemsCenter,
} from '@/styles/common';
import { shadow } from '@/styles/shadow';
import { color } from '@/styles/theme';
import { getSize, isMobile } from '@/utils';

type InnerProps = {
  id: string;
};

function Inner({ id }: InnerProps) {
  const data = MOCK_PROJECT_DETAIL;
  const router = useRouter();

  return (
    <CustomLayout
      hasButton={true}
      backgroundColor={color.Background.Alternative}>
      <CustomHeader
        mt
        backgroundColor={color.Background.Alternative}
        title={data.name}
        left={
          <CustomHeader.Button onPress={() => router.replace({ pathname: PROJECT_URLS.MAIN })}>
            <CustomHeader.BackButton />
          </CustomHeader.Button>
        }
        right={
          <CustomHeader.Button>
            <Typography
              variant='Body1/Normal'
              fontWeight='medium'
              color={color.Label.Alternative}>
              편집
            </Typography>
          </CustomHeader.Button>
        }
      />

      <ScrollView
        style={{
          flex: 1,
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
                {data.userList.map((user: { id: number; name: string }) => (
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
        </S.Container>
        <CustomLayout.ButtonBox />
      </ScrollView>

      <CustomLayout.BottomButton>
        <SolidButton
          onPress={() => router.navigate({ pathname: REVIEW_URLS.SELECT, params: { id } })}
          full>
          설문지 만들기
        </SolidButton>
      </CustomLayout.BottomButton>
    </CustomLayout>
  );
}

function Page() {
  const { id } = useLocalSearchParams() as { id: string };
  useTabBarEffect();

  if (!id) {
    return null;
  }

  return (
    <Suspense fallback={<Typography>로딩</Typography>}>
      <Inner id={id} />
    </Suspense>
  );
}

const ProjectUserListMobileStyle = css`
  ${flexDirectionRow};
  flex-wrap: wrap;
`;

const ProjectUserListWebStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ProjectUserItemMobileStyle = css`
  flex-basis: ${(getSize.screenWidth - 48) / 2 + 'px'};
`;

const S = {
  Container: styled.View`
    ${flexDirectionColumn};
    gap: 24px;
    padding: 20px;
    margin-bottom: 16px;
  `,
  ProjectCard: styled.View`
    ${flexDirectionRowItemsCenter};
    gap: 12px;
  `,

  ProjectImage: styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 60px;
  `,

  ProjectIntro: styled.View`
    ${flexDirectionColumn};
  `,

  ProjectItem: styled.View`
    ${flexDirectionColumn};
    gap: 8px;
  `,

  DateBox: styled.View`
    ${flexDirectionRowItemsCenter};
    gap: 8px;
    padding: 16px;
    background: ${({ theme }) => theme.color.Background.Normal};
    border-radius: 8px;
  `,

  ProjectTeamBox: styled.View`
    ${flexDirectionColumn};
    gap: 8px;
  `,
  SlideBarContainer: styled.View`
    ${flexDirectionRowItemsCenter};
    gap: 8px;
    justify-content: space-between;
    width: 100%;
    padding: 13px 21px;
    background: ${({ theme }) => theme.color.Background.Normal};
    border-radius: 8px;
  `,

  SlideBarBox: styled.View`
    flex-grow: 1;
  `,

  SlideValueText: styled.View`
    ${flexDirectionRow};
  `,

  ProjectUserList: styled.View`
    ${isMobile ? ProjectUserListMobileStyle : ProjectUserListWebStyle}
    gap: 8px;
  `,

  ProjectUser: styled.View`
    ${isMobile ? ProjectUserItemMobileStyle : flexDirectionColumn};
    padding: 18px 16px;
    background: ${({ theme }) => theme.color.Background.Normal};
    border-radius: 8px;
  `,

  LinkBox: styled.View`
    padding: 16px;
    background: ${({ theme }) => theme.color.Background.Normal};
    border-radius: 8px;
  `,
};

export default Page;
