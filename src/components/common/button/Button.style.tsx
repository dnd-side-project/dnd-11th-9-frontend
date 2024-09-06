import styled, { type ReactNativeStyle } from '@emotion/native';

import { flexDirectionRowItemsCenter, flexItemCenter } from '@/styles/common';

export const Container = styled.View<{ $sizeStyle: ReactNativeStyle }>`
  ${({ $sizeStyle }) => $sizeStyle}
  position: relative;
  overflow: hidden;
  border-radius: 30px;
`;

export const Button = styled.Pressable<{
  disabled: boolean;
  $typeStyle: ReactNativeStyle;
  $disabledStyle: ReactNativeStyle;
}>`
  ${({ disabled, $typeStyle, $disabledStyle }) => (disabled ? $disabledStyle : $typeStyle)}
  ${flexItemCenter};
  width: 100%;
  height: 100%;
  padding-horizontal: 16px;
`;

export const ButtonContent = styled.View`
  ${flexDirectionRowItemsCenter};
  gap: 4px;
`;
