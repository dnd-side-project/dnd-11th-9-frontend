import styled from '@emotion/native';

import { flexDirectionRow } from '@/styles/common';

export const Container = styled.View`
  ${flexDirectionRow};
`;

export const Image = styled.Image`
  width: 66px;
  height: 60px;
  background: ${({ theme }) => theme.color.Background.Normal};
  border-radius: 8px;
`;
