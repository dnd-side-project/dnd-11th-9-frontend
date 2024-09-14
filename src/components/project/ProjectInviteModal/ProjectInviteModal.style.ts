import styled from '@emotion/native';

import { flexDirectionColumn, flexDirectionColumnItemsCenter } from '@/styles/common';
import { color } from '@/styles/theme';
import { getSize } from '@/utils';

export const Container = styled.View`
  ${flexDirectionColumnItemsCenter};
  flex: 1;
  background: ${color.Background.Alternative};
`;

export const Contents = styled.View`
  ${flexDirectionColumnItemsCenter};
  gap: 20px;
  align-items: center;
  width: ${getSize.screenWidth - 40 + 'px'};
  height: fit-content;
  padding: 36px 32px;
  background: #fff;
  border-radius: 8px;
`;

export const ProjectBox = styled.View`
  ${flexDirectionColumnItemsCenter};
  gap: 12px;
`;

export const TextBox = styled.View`
  ${flexDirectionColumn};
  gap: 2px;
`;

export const ButtonBox = styled.View`
  ${flexDirectionColumnItemsCenter};
  gap: 12px;
  width: 100%;
`;
