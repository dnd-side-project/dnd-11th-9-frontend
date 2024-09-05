import styled from '@emotion/native';
import Constants from 'expo-constants/src/Constants';

import { flexDirectionColumn, flexItemCenter } from '@/styles/common';
const statusBarHeight = Constants.statusBarHeight || 0;

const Container = styled.SafeAreaView`
  flex: 1;
  ${flexItemCenter};
  justify-content: space-between;
  width: 100%;
  ${`padding-top: ${statusBarHeight + 135}px`};
`;
const LoginContainer = styled.View`
  ${flexDirectionColumn};
  gap: 20px;
  width: 100%;
  padding: 0 20px 54px;
`;
const LoginButtonBox = styled.View`
  ${flexDirectionColumn};
  gap: 16px;
  width: 100%;
`;

export { Container, LoginButtonBox, LoginContainer };
