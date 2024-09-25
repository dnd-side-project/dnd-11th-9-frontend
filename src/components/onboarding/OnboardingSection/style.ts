import styled from '@emotion/native';

import { flexDirectionColumnItemsCenter } from '@/styles/common';

export const ChipContainer = styled.View`
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
  justify-content: center;
`;

export const ReviewCardContainer = styled.View`
  ${flexDirectionColumnItemsCenter};
  gap: 11px;
  width: 100%;
  padding: 0 31px;
`;
