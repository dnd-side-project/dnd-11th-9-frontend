import styled from '@emotion/native';

import {
  flexDirectionColumn,
  flexDirectionRow,
  flexDirectionRowItemsCenter,
} from '@/styles/common';

export const Container = styled.View`
  ${flexDirectionRowItemsCenter};
  gap: 10px;
  padding: 16px;
  background-color: ${({ theme }) => theme.color.Background.Normal};
  border-radius: 8px;
`;

export const ProjectStatusBox = styled.View`
  ${flexDirectionColumn};
  flex-grow: 1;
`;

export const ProgressBox = styled.View`
  ${flexDirectionColumn};
  gap: 6px;
`;

export const ProgressInfo = styled.View`
  ${flexDirectionRow};
  justify-content: space-between;
`;
