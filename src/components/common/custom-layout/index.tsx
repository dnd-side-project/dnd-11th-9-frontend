import type { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';
import type { SafeAreaViewProps } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  backgroundColor?: string;
} & SafeAreaViewProps;

function CustomLayout({
  backgroundColor = 'transparent',
  children,
  ...rest
}: PropsWithChildren<Props>) {
  const { top } = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        paddingTop: top,
        flex: 1,
        backgroundColor: backgroundColor,
      }}
      {...rest}>
      {children}
    </SafeAreaView>
  );
}

export default CustomLayout;
