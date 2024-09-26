import styled from '@emotion/native';
import Constants from 'expo-constants/src/Constants';

const statusBarHeight = Constants.statusBarHeight || 0;

export const Container = styled.View`
  padding-top: ${statusBarHeight + 75 + 'px'};
`;
