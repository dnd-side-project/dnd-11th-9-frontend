import styled, { css } from '@emotion/native';
import type { Theme } from '@emotion/react';

import { flexDirectionColumnItemsCenter, flexDirectionRowItemsCenter } from '@/styles/common';
import { getSize } from '@/utils';

export const Layout = styled.View`
  ${flexDirectionColumnItemsCenter};
  position: absolute;
  z-index: 1000;
  flex: 1;
  width: ${getSize.deviceWidth + 'px'};
  height: ${getSize.deviceHeight + 'px'};
`;
export const Backdrop = styled.View`
  position: absolute;
  z-index: 1001;
  width: ${getSize.deviceWidth + 'px'};
  height: ${getSize.deviceHeight + 'px'};
  background: ${({ theme }) => theme.color.Material.Dimmer};
  opacity: 0.5;
`;
export const Container = styled.View`
  ${flexDirectionColumnItemsCenter};
  position: relative;
  z-index: 1002;
  width: ${getSize.deviceWidth - 40 + 'px'};
  padding-top: 32px;
  background: ${({ theme }) => theme.color.Background.Normal};
  border: none;
  border-radius: 10px;
`;
export const InfoBox = styled.View`
  ${flexDirectionColumnItemsCenter};
  gap: 4px;
`;
export const ButtonBox = styled.View`
  ${flexDirectionRowItemsCenter};
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color.Line['Neutral']};
`;

const borderStyle = (theme: Theme) => css`
  border-right: 1px solid ${theme.color.Line['Neutral']};
`;

export const ActionButton = styled.Pressable<{ $divider?: boolean }>`
  ${flexDirectionColumnItemsCenter};
  width: 50%;
  padding: 12px 0;
  text-align: center;

  ${({ $divider, theme }) => $divider && borderStyle(theme)}
`;
