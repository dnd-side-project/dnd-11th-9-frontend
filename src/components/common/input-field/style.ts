import styled, { css } from '@emotion/native';
import type { Theme } from '@emotion/react';

import { flexDirectionRow } from '@/styles/common';

const errorStyle = (theme: Theme) => css`
  border-color: ${theme.color.Status.Error};
  border-width: 1px;
`;

const disabledStyle = (theme: Theme) => css`
  color: ${theme.color.Label.Alternative};
  background-color: ${theme.color.Label.Alternative};
`;

const hasIconStyle = css`
  ${flexDirectionRow};
  gap: 5px;
`;

export const Container = styled.View<{
  $isError: boolean;
  $disabled: boolean;
}>`
  ${({ $isError, theme }) => $isError && errorStyle(theme)};
  ${({ $disabled, theme }) => $disabled && disabledStyle(theme)};
  padding: 18px 16px;
  background-color: ${({ theme }) => theme.color.Background.Normal};
  border-radius: 8px;
`;

export const InnerContainer = styled.View<{ $isIcon: boolean }>`
  ${({ $isIcon }) => $isIcon && hasIconStyle}
`;

export const TextInput = styled.TextInput`
  flex-grow: 1;
  padding: 0;
  font-family: Pretendard, serif;
  font-size: 15px;
  color: ${(props) => props.theme.color.Label.Normal};
`;

export const ErrorText = styled.Text`
  padding-top: 5px;
  font-size: 12px;
  color: ${(props) => props.theme.color.Status.Error};
`;
