import styled from '@emotion/native';
import type { PropsWithChildren } from 'react';
import type { SafeAreaViewProps } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/**
 * 하단 버튼의 영역 크기를 가져옵니다.
 */
function BottomButtonLayout({ children }: PropsWithChildren) {
  return <S.ButtonLayout>{children}</S.ButtonLayout>;
}

type Props = {
  hasButton?: boolean;
  backgroundColor?: string;
} & SafeAreaViewProps;

function Layout({
  hasButton = false,
  backgroundColor = 'transparent',
  children,
  ...rest
}: PropsWithChildren<Props>) {
  const { top = 0 } = useSafeAreaInsets();

  return (
    <S.Layout
      $top={top}
      $hasButton={hasButton}
      $backgroundColor={backgroundColor}
      {...rest}>
      {children}
    </S.Layout>
  );
}

const S = {
  Layout: styled.SafeAreaView<{
    $top: number;
    $hasButton: boolean;
    $backgroundColor: string;
  }>`
    flex: 1;
    padding-top: ${({ $top }) => $top + 'px'};
    background-color: ${({ $backgroundColor }) => $backgroundColor};
  `,
  BottomButtonLayout: styled.View`
    width: 100%;
    height: 112px;
  `,
  ButtonLayout: styled.View`
    position: absolute;
    bottom: 52px;
    width: 100%;
    padding: 12px 20px 52px;
  `,
};

const CustomLayout = Object.assign(Layout, {
  BottomButton: BottomButtonLayout,
  ButtonBox: S.BottomButtonLayout,
});

export default CustomLayout;
