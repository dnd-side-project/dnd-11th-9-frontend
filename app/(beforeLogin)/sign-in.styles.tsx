import styled from '@emotion/native';
import Constants from 'expo-constants/src/Constants';

import { flexDirectionColumn, flexItemCenter } from '@/styles/common';
import { getSize } from '@/utils';

const statusBarHeight = Constants.statusBarHeight || 0;

export const Background = styled.ImageBackground`
  height: 100%;
`;

export const LoginWrapper = styled.SafeAreaView`
  flex: 1;
  width: ${getSize.deviceWidth};
  height: ${getSize.deviceHeight};
  overflow: hidden;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  ${flexItemCenter};
  justify-content: space-between;
  width: 100%;
  ${`margin-top: ${statusBarHeight + 135}px`};
`;
export const LoginContainer = styled.View`
  ${flexDirectionColumn};
  gap: 20px;
  width: 100%;
  padding: 0 20px 54px;
`;
export const LoginButtonBox = styled.View`
  ${flexDirectionColumn};
  gap: 16px;
  width: 100%;
`;
