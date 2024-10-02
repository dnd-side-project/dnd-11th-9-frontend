import styled, { css } from '@emotion/native';
import type { Theme } from '@emotion/react';

import { flexDirectionColumn } from '@/styles/common';

export const Container = styled.View<{ $onboarding: boolean }>`
  ${flexDirectionColumn};
  gap: ${({ $onboarding }) => ($onboarding ? 16 : 24) + 'px'};
  width: 272px;
  height: ${({ $onboarding }) => ($onboarding ? '420px' : 'auto')};
  padding: 28px 16px;
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

export const ItemContainer = styled.View<{ $isChecked: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ theme, $isChecked }) => ($isChecked ? activeStyle(theme) : inActiveStyle(theme))};
  padding: 13px;
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
