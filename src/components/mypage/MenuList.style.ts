import styled from '@emotion/native';

import { flexDirectionRowItemsCenter } from '@/styles/common';

export const MenuListContainer = styled.View`
  padding: 0 20px;
`;

export const OneMenuContainer = styled.View`
  ${flexDirectionRowItemsCenter};
  justify-content: space-between;
  padding: 20px 0;
  border-color: ${({ theme }) => theme.color.Line.Neutral};
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;
