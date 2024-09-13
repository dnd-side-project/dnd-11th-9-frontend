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

export const ProjectImageBox = styled.View`
  ${flexDirectionColumnItemsCenter};
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 8px;
`;

export const ProjectImageOutline = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid rgb(115 112 114);
  border-radius: 8px;
`;

export const ProjectImage = styled.Image`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
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
