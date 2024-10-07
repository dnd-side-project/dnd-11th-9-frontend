import type { ReactNativeStyle } from '@emotion/native';
import styled from '@emotion/native';

import { flexDirectionRowItemsCenter } from '@/styles/common';

export const Container = styled.Pressable<{
  $isActive: ReactNativeStyle | boolean;
}>`
  box-sizing: border-box;
  ${({ $isActive }) => $isActive && $isActive}
  ${flexDirectionRowItemsCenter};
  gap: 6px;
  align-self: flex-start;
  width: fit-content;
  height: 48px;
  padding: 12px 16px;
  background: ${({ theme, $isActive }) => !$isActive && theme.color.Background.Alternative};
  border: ${({ theme, $isActive }) =>
    !$isActive && `1px solid ${theme.color.Background.Alternative}`};
  border-radius: 4px;
`;

export const IconWrapper = styled.View`
  ${flexDirectionRowItemsCenter};
  width: 24px;
  height: 24px;
`;
