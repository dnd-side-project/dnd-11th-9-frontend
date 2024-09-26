import styled from '@emotion/native';
import { Platform } from 'react-native';

import {
  flexDirectionColumn,
  flexDirectionRow,
  flexDirectionRowItemsCenter,
} from '@/styles/common';
import { getSize } from '@/utils';

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

export const ProjectUserList = styled.View`
  ${flexDirectionRow};
  flex-wrap: wrap;
  gap: 8px;
`;

export const ProjectUser = styled.View`
  flex-basis: ${(Platform.OS === 'web' ? getSize.screenWidth - 66 : getSize.screenWidth - 48) / 2 +
  'px'};
  padding: 18px 16px;
  background: ${({ theme }) => theme.color.Background.Normal};
  border-radius: 8px;
`;

export const LinkBox = styled.View`
  padding: 16px;
  background: ${({ theme }) => theme.color.Background.Normal};
  border-radius: 8px;
`;
