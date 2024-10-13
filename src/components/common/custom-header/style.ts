import styled from '@emotion/native';

import { flexDirectionColumnItemsCenter, flexDirectionRowItemsCenter } from '@/styles/common';

export const Layout = styled.View<{ $backgroundColor: string; $margin: boolean }>`
  position: relative;
  width: 100%;
  margin-top: ${({ $margin }) => ($margin ? '12px' : '')};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

// 버튼을 묶음으로 여러개를 사용할 때 사용하세요
export const ButtonGroupLayout = styled.View`
  ${flexDirectionRowItemsCenter};
  gap: 8px;
  padding: 8px;
`;

export const ButtonItem = styled.Pressable`
  ${flexDirectionColumnItemsCenter};
  cursor: pointer;
`;

// 버튼을 하나만 넣을 때 사용하세요
export const Button = styled(ButtonItem)`
  padding: 8px;
`;

export const LeftSection = styled.View`
  ${flexDirectionColumnItemsCenter};
  position: absolute;
  left: 12px;
  justify-content: center;
  height: 40px;
`;

export const RightSection = styled.View`
  ${flexDirectionColumnItemsCenter};
  position: absolute;
  right: 12px;
  justify-content: center;
  height: 40px;
`;

export const TitleSection = styled.View`
  ${flexDirectionColumnItemsCenter};
  justify-content: center;
  height: 40px;
`;
