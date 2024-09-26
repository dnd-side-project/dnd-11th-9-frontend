import styled from '@emotion/native';

import { COMPONENT_SIZE } from '@/constants';
import { flexDirectionColumnItemsCenter } from '@/styles/common';

export const Container = styled.ScrollView`
  padding-bottom: ${COMPONENT_SIZE.BOTTOM_NAV + 'px'};
`;

export const DeleteButton = styled.Pressable`
  ${flexDirectionColumnItemsCenter};
  width: 71px;
  background: ${({ theme }) => theme.color.Status.Error};
`;
