import type { ReactNativeStyle } from '@emotion/native';
import styled from '@emotion/native';

import { flexDirectionRowItemsCenter } from '@/styles/common';

export const Container = styled.View<{
  $onboarding: boolean;
  $isActive: ReactNativeStyle | boolean;
}>`
  box-sizing: border-box;
  ${({ $isActive }) => $isActive && $isActive}
  ${flexDirectionRowItemsCenter};
  gap: 6px;
  width: fit-content;
  padding: 12px 16px;
  background: ${({ theme, $isActive, $onboarding }) =>
    $onboarding ? theme.color.Background.Normal : !$isActive && theme.color.Background.Alternative};
  border: ${({ theme, $isActive }) =>
    !$isActive && `1px solid ${theme.color.Background.Alternative}`};
  border-radius: 4px;
`;

export const IconWrapper = styled.View`
  width: 24px;
  height: 24px;
`;
