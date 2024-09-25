import styled from '@emotion/native';

import { flexDirectionColumn } from '@/styles/common';

export const Container = styled.View`
  position: relative;
  width: 300px;
  padding: 74px 0;
  background: ${({ theme }) => theme.color.Background.Normal};
  border-radius: 17px;
`;

export const NameBox = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
`;

export const ReviewBox = styled.View`
  ${flexDirectionColumn};
  position: absolute;
  bottom: -36px;
  left: -16px;
  gap: 6px;
  width: 210px;
  padding: 16px 24px;
  background: ${({ theme }) => theme.color.Label.Strong};
  border-radius: 16px;
`;
