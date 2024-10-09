import styled from '@emotion/native';

import { flexDirectionRow } from '@/styles/common';
import { isMobile } from '@/utils';

export const ButtonGroup = styled.View`
  ${flexDirectionRow};
  gap: 10px;
  padding-right: ${isMobile ? 0 : '20px'};
`;
