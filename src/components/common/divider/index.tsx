import styled from '@emotion/native';
import type { ViewProps } from 'react-native';

import { color } from '@/styles/theme';

type Props = {
  type: 'horizontal' | 'vertical';
  borderColor?: string;
} & ViewProps;

function Divider({ type, borderColor = color.Line.Normal, ...rest }: Props) {
  return (
    <S.Layout
      $type={type}
      $color={borderColor}
      {...rest}
    />
  );
}

export default Divider;

const S = {
  Layout: styled.View<{ $type: 'horizontal' | 'vertical'; $color: string }>`
    width: ${({ $type }) => ($type === 'horizontal' ? '100%' : '1px')};
    height: ${({ $type }) => ($type === 'horizontal' ? '1px' : '100%')};
    background-color: ${({ $color }) => $color};
  `,
};
