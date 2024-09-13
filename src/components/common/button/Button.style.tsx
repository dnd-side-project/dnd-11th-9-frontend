import styled, { type ReactNativeStyle } from '@emotion/native';

import { flexDirectionRowItemsCenter, flexItemCenter } from '@/styles/common';

export const Container = styled.View<{ $sizeStyle: ReactNativeStyle; $full: boolean }>`
  ${({ $sizeStyle }) => $sizeStyle};
  position: relative;
  width: ${({ $full }) => ($full ? '100%' : 'fit-content')};
  overflow: hidden;
  border-radius: 30px;
`;

export const Button = styled.Pressable<{
  disabled: boolean;
  $typeStyle?: ReactNativeStyle;
  $disabledStyle?: ReactNativeStyle;
}>`
  ${({ disabled, $typeStyle, $disabledStyle }) => (disabled ? $disabledStyle : $typeStyle)}
  ${flexItemCenter};
  width: ${({ $typeStyle }) => ($typeStyle ? '100%' : 'fit-content')};
  height: ${({ $typeStyle }) => ($typeStyle ? '100%' : 'fit-content')};
  padding-horizontal: ${({ $typeStyle }) => $typeStyle && 16 + 'px'};
  border-radius: 30px;
`;

export const ButtonContent = styled.View`
  ${flexDirectionRowItemsCenter};
  gap: 4px;
`;
