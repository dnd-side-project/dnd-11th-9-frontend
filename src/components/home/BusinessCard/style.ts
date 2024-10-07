import styled from '@emotion/native';

export const Container = styled.View`
  position: relative;
  width: 300px;
  height: auto;
  padding: 74px 0;
  margin-bottom: 14px;
  margin-left: 22px;
  background: ${({ theme }) => theme.color.Background.Normal};
  border-radius: 17px;
`;

export const NameBox = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
`;
