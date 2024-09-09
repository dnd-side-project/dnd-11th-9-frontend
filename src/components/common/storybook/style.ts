import styled from '@emotion/native';

import { flexDirectionColumn, flexDirectionRowItemsCenter } from '@/styles/common';
import { color } from '@/styles/theme';

export const Container = styled.View`
  ${flexDirectionColumn};
  gap: 8px;
`;

export const Row = styled.View`
  ${flexDirectionRowItemsCenter};
  gap: 16px;
`;

export const Chip = styled.View`
  ${flexDirectionRowItemsCenter};
  width: fit-content;
  padding: 3px 6px;
  background-color: ${color.Neutral['95']};
  border-radius: 4px;
`;

export const DescriptionContainer = styled.View`
  ${flexDirectionRowItemsCenter};
  gap: 8px;
`;
