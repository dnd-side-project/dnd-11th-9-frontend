import styled from '@emotion/native';
import Animated from 'react-native-reanimated';

import { COMPONENT_SIZE } from '@/constants';
import {
  flexDirectionColumn,
  flexDirectionColumnItemsCenter,
  flexDirectionRow,
} from '@/styles/common';

export const Container = styled.ScrollView`
  padding-bottom: ${COMPONENT_SIZE.BOTTOM_NAV + 'px'};
`;

export const ProjectContainer = styled.View`
  ${flexDirectionColumn};
  background-color: ${({ theme }) => theme.color.Background.Normal};
  border-radius: 8px;
`;

export const ProjectInActiveBox = styled.View`
  ${flexDirectionRow};
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px;
`;

export const ProjectInfoBox = styled.View`
  ${flexDirectionRow};
  gap: 8px;
`;

export const ProjectStatusBox = styled.View`
  ${flexDirectionColumn};
`;

export const ProjectActiveDivider = styled.View`
  height: 1px;
  margin: 0 20px;
  border-bottom-color: ${({ theme }) => theme.color.Line.Neutral};
  border-bottom-width: 1px;
`;

export const ProjectActiveBox = styled(Animated.View)`
  overflow: 'hidden';
`;

export const DeleteButton = styled.Pressable`
  ${flexDirectionColumnItemsCenter};
  width: 71px;
  background: ${({ theme }) => theme.color.Status.Error};
`;
