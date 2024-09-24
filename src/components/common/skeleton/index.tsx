import styled, { css, type ReactNativeStyle } from '@emotion/native';
import { memo } from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  width: ReactNativeStyle['width'];
  height: ReactNativeStyle['height'];
  variant: 'text' | 'rounded' | 'circular';
};

type VariantType = 'text' | 'rounded' | 'circular';

const variantStyle: Record<VariantType, ReactNativeStyle> = {
  text: css`
    border-radius: 0;
  `,
  rounded: css`
    border-radius: 4px;
  `,
  circular: css`
    border-radius: 9999px;
  `,
};

function Skeleton({ width = '100%', height = 16, variant = 'text' }: Partial<Props>) {
  const opacity = useSharedValue(1);

  opacity.value = withRepeat(
    withTiming(0.4, {
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    }),
    -1,
    true
  );

  const style = useAnimatedStyle(() => {
    return {
      width,
      height,
      opacity: opacity.value,
      backgroundColor: '#ebebeb',
    };
  });

  return (
    <Item
      variant={variant}
      style={style}
    />
  );
}

const Item = styled(Animated.View)<{ variant: VariantType }>`
  ${({ variant }) => variantStyle[variant]};
`;

export default memo(Skeleton);
