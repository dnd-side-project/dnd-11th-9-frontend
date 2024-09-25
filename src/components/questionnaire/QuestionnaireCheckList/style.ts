import styled, { css } from '@emotion/native';
import type { Theme } from '@emotion/react';

import { flexDirectionColumn, flexDirectionRowItemsCenter } from '@/styles/common';

export const Container = styled.View`
  ${flexDirectionColumn};
  gap: 20px;
  width: 272px;
  padding: 28px 16px;
  background: ${({ theme }) => theme.color.Background.Normal};
  border-radius: 13px;
`;

const inActiveStyle = (theme: Theme) => css`
  background: ${theme.color.Background.Normal};
  border: 1px solid ${theme.color.Line.Normal};
`;

const activeStyle = (theme: Theme) => css`
  background: ${theme.color.Blue['95']};
  border: 1px solid ${theme.color.Primary.Normal};
`;

export const ItemContainer = styled.View<{ $isChecked: boolean }>`
  ${flexDirectionRowItemsCenter};
  ${({ theme, $isChecked }) => ($isChecked ? activeStyle(theme) : inActiveStyle(theme))};
  justify-content: space-between;
  padding: 13px 28px 13px 13px;
  border-radius: 7px;
`;

export const ListContainer = styled.View`
  ${flexDirectionColumn};
  gap: 8px;
`;

export const ItemValue = styled.View`
  ${flexDirectionColumn};
`;

export const RadioButton = styled.Pressable`
  ${flexDirectionRowItemsCenter};
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 13px;
`;
