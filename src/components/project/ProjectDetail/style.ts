import styled, { css } from '@emotion/native';

import {
  flexDirectionColumn,
  flexDirectionRow,
  flexDirectionRowItemsCenter,
} from '@/styles/common';
import { getSize, isMobile } from '@/utils';

export const Container = styled.SafeAreaView`
  ${flexDirectionColumn};
  gap: 24px;
  padding: 32px 20px 52px;
`;

export const ProjectCard = styled.View`
  ${flexDirectionRowItemsCenter};
  gap: 12px;
`;

export const ProjectImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 60px;
`;

export const ProjectIntro = styled.View`
  ${flexDirectionColumn};
`;

export const ProjectItem = styled.View`
  ${flexDirectionColumn};
  gap: 8px;
`;

export const DateBox = styled.View`
  ${flexDirectionRowItemsCenter};
  gap: 8px;
  padding: 16px;
  background: ${({ theme }) => theme.color.Background.Normal};
  border-radius: 8px;
`;

export const ProjectTeamBox = styled.View`
  ${flexDirectionColumn};
  gap: 8px;
`;

export const SlideBarContainer = styled.View`
  ${flexDirectionRowItemsCenter};
  gap: 8px;
  justify-content: space-between;
  width: 100%;
  padding: 13px 21px;
  background: ${({ theme }) => theme.color.Background.Normal};
  border-radius: 8px;
`;

export const SlideBarBox = styled.View`
  flex-grow: 1;
`;

export const SlideValueText = styled.View`
  ${flexDirectionRow};
`;

const ProjectUserListMobileStyle = css`
  ${flexDirectionRow};
  flex-wrap: wrap;
`;

const ProjectUserListWebStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const ProjectUserList = styled.View`
  ${isMobile ? ProjectUserListMobileStyle : ProjectUserListWebStyle}
  gap: 8px;
`;

const ProjectUserItemMobileStyle = css`
  flex-basis: ${(getSize.screenWidth - 48) / 2 + 'px'};
`;

export const ProjectUser = styled.View`
  ${isMobile ? ProjectUserItemMobileStyle : flexDirectionColumn};
  padding: 18px 16px;
  background: ${({ theme }) => theme.color.Background.Normal};
  border-radius: 8px;
`;

export const LinkBox = styled.View`
  padding: 16px;
  background: ${({ theme }) => theme.color.Background.Normal};
  border-radius: 8px;
`;
