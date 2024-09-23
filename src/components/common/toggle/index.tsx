import styled, { css } from '@emotion/native';
import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { theme } from '@/styles/theme';

interface ToggleProps {
  isOn: boolean;
  disabled?: boolean;
  onToggle: () => void;
}

function Toggle({ onToggle, isOn = true, disabled = false }: ToggleProps) {
  const translateX = useRef(new Animated.Value(isOn || disabled ? 20 : 0)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isOn || disabled ? 20 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isOn, translateX, disabled]);

  const backgroundColor = disabled
    ? theme.color.Label.Disable
    : isOn
      ? theme.color.Primary.Normal
      : theme.color.Neutral[99];

  return (
    <S.Container
      disabled={disabled}
      onPress={onToggle}
      bgColor={backgroundColor}>
      <S.Circle
        style={{ transform: [{ translateX }] }}
        isOn={isOn}
      />
    </S.Container>
  );
}

export default Toggle;

const S = {
  Container: styled.Pressable<{ bgColor: string }>`
    display: flex;
    flex-shrink: 0;
    gap: 10px;
    width: 44px;
    height: 24px;
    padding: 2px;
    background-color: ${({ bgColor }) => bgColor};
    border-radius: 20px;
  `,
  Circle: styled(Animated.View)<{ isOn: boolean }>`
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.color.Common[100]};
    ${({ isOn }) =>
      isOn &&
      css`
        filter: drop-shadow(1px 1px 2px rgb(0 0 0 / 10%));
      `}
    border-radius: 20px;
  `,
};
