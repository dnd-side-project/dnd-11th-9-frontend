import { Feather } from '@expo/vector-icons';
import type { ComponentPropsWithoutRef, PropsWithChildren, ReactElement } from 'react';
import type { PressableProps, ViewProps } from 'react-native';
import { StatusBar } from 'react-native';

import Typography from '@/components/common/typography';
import { isMobile } from '@/utils';

import * as S from './style';

type Props = {
  // mt props는 statusbar와 거리를 벌려주기 위해서 사용하는 속성입니다.
  mt?: boolean;
  title?: string;
  titleProps?: ComponentPropsWithoutRef<typeof Typography>;
  left?: ReactElement;
  right?: ReactElement;
  backgroundColor?: string;
} & ViewProps;

function Layout({
  backgroundColor = 'transparent',
  title,
  titleProps,
  left,
  right,
  mt = false,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <S.Layout
      $margin={mt}
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

function BackButton() {
  return (
    <Feather
      name='chevron-left'
      size={24}
    />
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
  BackButton,
});

export default CustomHeader;
