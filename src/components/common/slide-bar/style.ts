import styled from '@emotion/native';

export const Container = styled.View`
  position: relative;
  width: 100%;
  height: 4px;
  overflow: hidden;
  background: ${({ theme }) => theme.color.Background.Alternative};
  border-radius: 30px;
`;
