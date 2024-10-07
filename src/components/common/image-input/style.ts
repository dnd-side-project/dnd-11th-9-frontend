import styled from '@emotion/native';

import { flexDirectionColumnItemsCenter } from '@/styles/common';

export const Container = styled.Pressable`
  ${flexDirectionColumnItemsCenter};
  width: 66px;
  height: 60px;
  padding: 18px 21px;
  background: ${({ theme }) => theme.color.Background.Normal};
  border-radius: 8px;
`;
