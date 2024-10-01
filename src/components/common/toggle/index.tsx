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
  const translateX = useRef(new Animated.Value(isOn && !disabled ? 20 : 0)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isOn && !disabled ? 20 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isOn, translateX, disabled]);

  const backgroundColor =
    disabled || !isOn ? theme.color.Label.Disable : theme.color.Primary.Normal;

  return (
    <S.Container
      disabled={disabled}
      onPress={onToggle}
      style={{ backgroundColor, opacity: disabled ? 0.5 : 1 }}>
      <S.Circle
        style={{ transform: [{ translateX }] }}
        isOn={isOn}
      />
    </S.Container>
  );
}

export default Toggle;

const S = {
  Container: styled.Pressable`
    display: flex;
    flex-shrink: 0;
    gap: 10px;
    width: 44px;
    height: 24px;
    padding: 2px;
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
