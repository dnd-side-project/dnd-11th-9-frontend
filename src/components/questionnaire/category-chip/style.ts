import type { ReactNativeStyle } from '@emotion/native';
import styled from '@emotion/native';

export const Container = styled.View<{ $categoryStyle: ReactNativeStyle }>`
  ${({ $categoryStyle }) => $categoryStyle};
  align-self: flex-start;
  width: fit-content;
  padding: 5px 10px;
  border-radius: 3px;
`;
