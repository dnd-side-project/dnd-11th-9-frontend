import styled, { css } from '@emotion/native';
import type { Theme } from '@emotion/react';

import { flexDirectionColumn } from '@/styles/common';

export const Container = styled.View`
  ${flexDirectionColumn};
  gap: 24px;
  padding-vertical: 28px;
  padding-horizontal: 16px;
  background: ${({ theme }) => theme.color.Background.Normal};
  border-radius: 13px;
`;

export const ListContainer = styled.View`
  ${flexDirectionColumn};
  gap: 8px;
`;

const inActiveStyle = (theme: Theme) => css`
  background: ${theme.color.Background.Normal};
  border: 1px solid ${theme.color.Line.Normal};
`;

const activeStyle = (theme: Theme) => css`
  background: ${theme.color.Blue['95']};
  border: 1px solid ${theme.color.Primary.Normal};
`;

export const ItemContainer = styled.Pressable<{ $isChecked: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ theme, $isChecked }) => ($isChecked ? activeStyle(theme) : inActiveStyle(theme))};
  padding-vertical: 13px;
  padding-horizontal: 13px;
  border-radius: 7px;
`;

export const ItemValue = styled.View`
  ${flexDirectionColumn};
  flex-grow: 1;
`;

export const RadioButton = styled.Pressable`
  flex-shrink: 1;
  width: 16px;
  height: 16px;
`;
