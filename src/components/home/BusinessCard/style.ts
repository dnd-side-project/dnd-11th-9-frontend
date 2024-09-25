import styled from '@emotion/native';

export const Container = styled.View`
  position: relative;
  width: 300px;
  padding: 74px 0;
  background: ${({ theme }) => theme.color.Background.Normal};
  border-radius: 17px;
`;

export const NameBox = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
`;
