import type { ReactNativeStyle } from '@emotion/native';
import styled from '@emotion/native';

import { flexDirectionRowItemsCenter } from '@/styles/common';

export const Container = styled.View<{ $isActive: ReactNativeStyle | boolean }>`
  ${({ $isActive }) => $isActive && $isActive}
  ${flexDirectionRowItemsCenter};
  gap: 6px;
  width: fit-content;
  padding: 12px 16px;
  background: ${({ theme, $isActive }) => !$isActive && theme.color.Background.Normal};
  border-radius: 4px;
`;

export const IconWrapper = styled.View`
  width: 24px;
  height: 24px;
`;
