import styled from '@emotion/native';
import Constants from 'expo-constants/src/Constants';

import { flexDirectionColumn, flexItemCenter } from '@/styles/common';

const statusBarHeight = Constants.statusBarHeight || 0;

export const Container = styled.SafeAreaView`
  flex: 1;
  ${flexDirectionColumn};
  justify-content: space-between;
  overflow: hidden;
`;

export const OnBoardingWrapper = styled.View`
  ${flexDirectionColumn};
  gap: 32px;
  padding-horizontal: 32px;
`;

export const ContentBox = styled.View`
  justify-content: space-between;
  ${`padding-top: ${statusBarHeight + 135}px`};
`;

export const TextWrapper = styled.View`
  gap: 12px;
  width: 100%;
  ${flexDirectionColumn};
`;

export const ButtonBox = styled.View`
  ${flexDirectionColumn};
  gap: 12px;
  justify-items: center;
  padding: 0 20px 28px;
`;

export const SkipButton = styled.Pressable`
  ${flexItemCenter}
`;
