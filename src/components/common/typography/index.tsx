import type { ReactNativeStyle } from '@emotion/native';
import styled, { css } from '@emotion/native';
import React from 'react';
import { type TextProps } from 'react-native';

export type Props = TextProps & {
  variant: keyof typeof TypographyStyle;
  fontWeight: keyof typeof FontWeightStyle;
  color: string;
  style?: ReactNativeStyle;
};

const FontWeightStyle = {
  normal: css({
    fontFamily: 'Pretendard',
    fontWeight: 400,
  }),
  bold: css({
    fontFamily: 'Pretendard-Bold',
    fontWeight: 700,
  }),
  semiBold: css({
    fontFamily: 'Pretendard-SemiBold',
    fontWeight: 600,
  }),
  medium: css({
    fontFamily: 'Pretendard-Medium',
    fontWeight: 500,
  }),
};

const TypographyStyle = {
  Display1: css`
    font-size: 56px;
    line-height: 72px;
    letter-spacing: -0.0319em;
  `,
  Display2: css`
    font-size: 40px;
    line-height: 52px;
    letter-spacing: -0.0282em;
  `,
  Title1: css`
    font-size: 36px;
    line-height: 72px;
    letter-spacing: -0.027em;
  `,
  Title2: css`
    font-size: 28px;
    line-height: 38px;
    letter-spacing: -0.0236em;
  `,
  Title3: css`
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.023em;
  `,
  Heading1: css`
    font-size: 22px;
    line-height: 30px;
    letter-spacing: -0.0194em;
  `,
  Heading2: css`
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.12em;
  `,
  Headline1: css`
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.002em;
  `,
  Headline2: css`
    font-size: 17px;
    line-height: 24px;
    letter-spacing: 0;
  `,
  'Body1/Normal': css`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.0057em;
  `,
  'Body1/Reading': css`
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.0057em;
  `,
  'Body2/Normal': css`
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.0096em;
  `,
  'Body2/Reading': css`
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.0096em;
  `,
  'Label1/Normal': css`
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.0145em;
  `,
  'Label1/Reading': css`
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.0145em;
  `,
  Label2: css`
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 0.0194em;
  `,
  Caption1: css`
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.0252em;
  `,
  Caption2: css`
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.0311em;
  `,
};

const CustomText = styled.Text<Props>`
  ${({ variant }) => TypographyStyle[variant]}
  ${({ fontWeight }) => FontWeightStyle[fontWeight]}
  ${({ color }) => (color ? `color: ${color};` : '')}
  ${({ style }) => style}
`;

function Typography({
  children,
  variant = 'Label1/Normal',
  fontWeight = 'normal',
  color = 'black',
  ...rest
}: Partial<Props>) {
  return (
    <CustomText
      variant={variant}
      fontWeight={fontWeight}
      color={color}
      {...rest}>
      {children}
    </CustomText>
  );
}

export default React.memo(Typography);
