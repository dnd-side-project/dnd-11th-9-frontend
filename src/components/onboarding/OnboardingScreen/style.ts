import styled from '@emotion/native';

import {
  flexDirectionColumn,
  flexDirectionColumnItemsCenter,
  flexItemCenter,
} from '@/styles/common';

export const Container = styled.SafeAreaView`
  flex: 1;
  ${flexDirectionColumn};
  justify-content: space-between;
  overflow: hidden;
`;

export const OnBoardingWrapper = styled.View`
  ${flexDirectionColumn};
  flex-grow: 1;
  gap: 32px;
  padding: 0 20px;
`;

export const ContentWrapperBox = styled.View`
  flex-grow: 1;
  ${flexDirectionColumnItemsCenter};
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
