import styled from '@emotion/native';

import { flexDirectionRowItemsCenter } from '@/styles/common';

export const Container = styled.Pressable`
  ${flexDirectionRowItemsCenter};
  flex-grow: 1;
  padding: 18px 16px;
  background: ${({ theme }) => theme.color.Background.Normal};
  border-radius: 8px;
`;
