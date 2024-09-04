import styled from '@emotion/native';
import Constants from 'expo-constants/src/Constants';

import { flexDirectionColumn, flexItemCenter } from '@/styles/common';

const statusBarHeight = Constants.statusBarHeight || 0;

export const Container = styled.SafeAreaView`
  flex: 1;
  ${flexItemCenter};
  flex-direction: column;
  justify-content: space-between;
  padding-top: 135px;
  ${`padding-top: ${statusBarHeight + 135}px`};
`;

export const TextBox = styled.View`
  gap: 12px;
  width: 100%;
  padding: 0 32px;
  ${flexDirectionColumn};
`;

export const StepBar = styled.View`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

export const ActiveStep = styled.View`
  width: 16px;
  height: 6px;
  background: #000;
  border-radius: 30px;
`;

export const InactiveStep = styled.View`
  width: 6px;
  height: 6px;
  background-color: #00000026;
  border-radius: 30px;
`;

export const StepBox = styled.View`
  ${flexDirectionColumn};
  gap: 12px;
  width: 100%;
  padding: 0 20px 28px;
`;

export const SkipButton = styled.Pressable`
  ${flexItemCenter}
`;
