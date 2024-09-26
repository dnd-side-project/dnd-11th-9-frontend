import styled from '@emotion/native';

import { flexDirectionColumnItemsCenter } from '@/styles/common';

export const ProjectImageBox = styled.View`
  ${flexDirectionColumnItemsCenter};
  position: relative;
  width: 48px;
  height: 48px;
  overflow: hidden;
  border-radius: 8px;
`;

export const ProjectImageOutline = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.color.Line.Normal};
  border-radius: 8px;
`;

export const ProjectImage = styled.Image`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;
