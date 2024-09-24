import styled from '@emotion/native';

import { flexDirectionColumn } from '@/styles/common';

export const Container = styled.View`
  ${flexDirectionColumn};
  gap: 16px;
  padding: 12px;
  background-color: ${({ theme }) => theme.color.Background.Normal};
  border-radius: 4px;
`;

export const ContentsBox = styled.View`
  ${flexDirectionColumn};
  gap: 8px;
`;
