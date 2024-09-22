import type { ForwardedRef, ReactNode } from 'react';
import React, { forwardRef, useRef } from 'react';
import type { TextInput } from 'react-native';
import { type TextInputProps } from 'react-native';
import { Pressable } from 'react-native';

import { shadow } from '@/styles/shadow';
import { color } from '@/styles/theme';
import { mergeRefs } from '@/utils';

import * as S from './style';

interface InputFieldProps extends TextInputProps {
  touched?: boolean;
  disabled?: boolean;
  error?: string;
  icon?: ReactNode;
}

const InputField = forwardRef(
  (
    { touched, disabled = false, error, icon = null, multiline, ...props }: InputFieldProps,
    ref?: ForwardedRef<TextInput>
  ) => {
    const innerRef = useRef<TextInput>(null);

    const handlePressInput = () => {
      innerRef.current?.focus();
    };

    return (
      <Pressable onPress={handlePressInput}>
        <S.Container
          style={shadow[2]}
          $disabled={disabled}
          $isError={Boolean(touched) && Boolean(error)}>
          <S.InnerContainer $isIcon={!!icon}>
            {icon}
            <S.TextInput
              // @ts-expect-error: outline is not a valid style property
              style={{ outline: 'none' }}
              ref={ref ? mergeRefs(innerRef, ref) : innerRef}
              multiline={Boolean(multiline)}
              numberOfLines={multiline ? 4 : 1}
              editable={!disabled}
              autoCapitalize='none'
              spellCheck={false}
              autoCorrect={false}
              placeholderTextColor={color.Label.Alternative}
              {...props}
            />
          </S.InnerContainer>
          {touched && !!error && <S.ErrorText>{error}</S.ErrorText>}
        </S.Container>
      </Pressable>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
