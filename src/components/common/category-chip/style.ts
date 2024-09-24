import styled from '@emotion/native';

import { flexDirectionRowItemsCenter } from '@/styles/common';

export const Container = styled.View`
  ${flexDirectionRowItemsCenter};
  gap: 6px;
  width: fit-content;
  padding: 12px 16px;
  background: ${({ theme }) => theme.color.Background.Normal};
  border-radius: 4px;
`;

export const IconWrapper = styled.View`
  width: 24px;
  height: 24px;
`;
