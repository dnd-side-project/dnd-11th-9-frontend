import styled from '@emotion/native';

import { flexDirectionColumn, flexDirectionRow } from '@/styles/common';

export const Container = styled.View`
  ${flexDirectionColumn};
  gap: 20px;
  padding: 20px;
`;

export const Form = styled.View`
  ${flexDirectionColumn};
  gap: 36px;
`;

export const InputContainer = styled.View`
  ${flexDirectionColumn};
  gap: 8px;
`;

export const ImageBox = styled.View`
  ${flexDirectionRow};
  gap: 8px;
`;

export const DatePickerBox = styled.View`
  ${flexDirectionRow};
  gap: 8px;
`;

export const DateSplitText = styled.Text`
  font-family: Pretendard, serif;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.color.Label.Normal};
`;

export const SubmitButtonBox = styled.View`
  padding: 12px 0 52px;
`;
