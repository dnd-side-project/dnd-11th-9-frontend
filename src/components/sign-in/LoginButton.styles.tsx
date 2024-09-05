import styled from '@emotion/native';

import { flexItemCenter } from '@/styles/common';

export const Button = styled.Pressable<{ $backgroundColor: string }>`
  display: flex;
  ${flexItemCenter};
  flex-direction: row;
  gap: 5px;
  background: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: 12px;
`;
