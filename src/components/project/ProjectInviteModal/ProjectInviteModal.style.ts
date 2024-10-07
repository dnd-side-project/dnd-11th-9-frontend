import styled, { css } from '@emotion/native';
import { Platform } from 'react-native';

import { SCREEN_SIZE } from '@/constants';
import { flexDirectionColumn, flexDirectionColumnItemsCenter } from '@/styles/common';
import { color } from '@/styles/theme';
import { getSize } from '@/utils';

const WebContainerStyle = css`
  max-width: ${SCREEN_SIZE.WEB_WIDTH + 'px'};
  padding: 20px;
  margin: 0 auto;
`;

export const Container = styled.View`
  ${flexDirectionColumnItemsCenter};
  ${Platform.OS === 'web' && WebContainerStyle}
  flex: 1;
  background: ${color.Background.Alternative};
`;

export const Contents = styled.View`
  ${flexDirectionColumnItemsCenter};
  gap: 20px;
  align-items: center;
  width: ${getSize.screenWidth - 40 + 'px'};
  height: fit-content;
  padding: 36px 32px;
  background: #fff;
  border-radius: 8px;
`;

export const ProjectBox = styled.View`
  ${flexDirectionColumnItemsCenter};
  gap: 12px;
`;

export const TextBox = styled.View`
  ${flexDirectionColumn};
  gap: 2px;
`;

export const ButtonBox = styled.View`
  ${flexDirectionColumnItemsCenter};
  gap: 12px;
  width: 100%;
`;
