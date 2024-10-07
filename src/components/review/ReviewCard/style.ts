import styled from '@emotion/native';

import { flexDirectionColumn } from '@/styles/common';

export const Container = styled.View`
  ${flexDirectionColumn};
  gap: 16px;
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.color.Background.Normal};
  border-radius: 4px;
`;

export const ProjectChip = styled.View`
  align-self: flex-start;
  padding: 6px 12px;
  background: ${({ theme }) => theme.color.CoolNeutral['98']};
  border-radius: 4px;
`;

export const ContentsBox = styled.View`
  ${flexDirectionColumn};
  gap: 8px;
`;
