import type { ComponentPropsWithoutRef, PropsWithChildren, ReactElement } from 'react';
import type { PressableProps, ViewProps } from 'react-native';
import { StatusBar } from 'react-native';

import Typography from '@/components/common/typography';
import { color } from '@/styles/theme';
import { isMobile } from '@/utils';

import * as S from './style';

type Props = {
  title?: string;
  titleProps?: ComponentPropsWithoutRef<typeof Typography>;
  left?: ReactElement;
  right?: ReactElement;
  backgroundColor?: string;
} & ViewProps;

function Layout({
  backgroundColor = color.Background.Normal,
  title,
  titleProps,
  left,
  right,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <S.Layout
      $backgroundColor={backgroundColor}
      {...rest}>
      {isMobile && <StatusBar backgroundColor={backgroundColor} />}
      {title && (
        <S.TitleSection>
          <Typography
            variant='Headline1'
            fontWeight='semiBold'
            {...titleProps}>
            {title}
          </Typography>
        </S.TitleSection>
      )}
      {left && <S.LeftSection>{left}</S.LeftSection>}
      {right && <S.RightSection>{right}</S.RightSection>}
    </S.Layout>
  );
}

function ButtonGroup({ children, ...rest }: PropsWithChildren<ViewProps>) {
  return <S.ButtonGroupLayout {...rest}>{children}</S.ButtonGroupLayout>;
}

function ButtonGroupItem({ children, ...rest }: PropsWithChildren<PressableProps>) {
  return <S.ButtonItem {...rest}>{children}</S.ButtonItem>;
}

function Button({ children, ...rest }: PropsWithChildren<PressableProps>) {
  return <S.Button {...rest}>{children}</S.Button>;
}

const CustomHeader = Object.assign(Layout, {
  ButtonGroup,
  ButtonGroupItem,
  Button,
});

export default CustomHeader;
