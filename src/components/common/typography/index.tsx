import styled, { css } from '@emotion/native';
import { memo } from 'react';
import { type TextProps } from 'react-native';

import { isMobile } from '@/utils';

type Props = TextProps & {
  variant: keyof typeof TypographyStyle;
  fontWeight: keyof typeof FontWeightStyle;
  color: string;
  breakWord?: boolean;
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
  `,
  Display2: css`
    font-size: 40px;
    line-height: 52px;
  `,
  Title1: css`
    font-size: 36px;
    line-height: 72px;
  `,
  Title2: css`
    font-size: 28px;
    line-height: 38px;
  `,
  Title3: css`
    font-size: 24px;
    line-height: 32px;
  `,
  Heading1: css`
    font-size: 22px;
    line-height: 30px;
  `,
  Headline1: css`
    font-size: 18px;
    line-height: 26px;
  `,
  'Body1/Normal': css`
    font-size: 16px;
    line-height: 24px;
  `,
  'Body1/Reading': css`
    font-size: 16px;
    line-height: 26px;
  `,
  'Body2/Normal': css`
    font-size: 15px;
    line-height: 22px;
  `,
  'Body2/Reading': css`
    font-size: 15px;
    line-height: 24px;
  `,
  'Label1/Normal': css`
    font-size: 14px;
    line-height: 20px;
  `,
  'Label1/Reading': css`
    font-size: 14px;
    line-height: 22px;
  `,
  Caption1: css`
    font-size: 12px;
    line-height: 16px;
  `,
  Caption2: css`
    font-size: 11px;
    line-height: 14px;
  `,
};

const breakWordText = css`
  width: 100%;
  word-wrap: break-word;
`;

const CustomText = styled.Text<Props>`
  ${({ variant }) => TypographyStyle[variant]};
  ${({ fontWeight }) =>
    fontWeight === 'semiBold' && !isMobile
      ? FontWeightStyle['normal']
      : FontWeightStyle[fontWeight]};
  ${({ color }) => (color ? `color: ${color};` : '')};
  ${({ breakWord }) => breakWord && breakWordText}
`;

/**
 * Typography 컴포넌트
 * @param children 표시할 글씨를 입력합니다.
 * @param variant  텍스트의 크기, 자간, 줄간 등의 스타일을 지정합니다.
 * @param fontWeight 글씨 굵기 속성을 지정합니다.
 * @param color 글씨의 색깔을 선택합니다.
 * @param breakWord 글씨의 줄바꿈을 제거합니다.
 * @param rest  나머지 추가 속성들을 받아옵니다.
 * @constructor
 */
function Typography({
  children,
  variant = 'Label1/Normal',
  fontWeight = 'normal',
  color = 'black',
  breakWord = false,
  ...rest
}: Partial<Props>) {
  return (
    <CustomText
      variant={variant}
      fontWeight={fontWeight}
      color={color}
      breakWord={breakWord}
      {...rest}>
      {children}
    </CustomText>
  );
}

export default memo(Typography);
