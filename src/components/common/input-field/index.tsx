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
  isShadow?: boolean;
  touched?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  error?: string;
  icon?: ReactNode;
}

const InputField = forwardRef(
  (
    {
      backgroundColor = 'transparent',
      touched,
      isShadow = true,
      disabled = false,
      error,
      icon = null,
      multiline,
      ...props
    }: InputFieldProps,
    ref?: ForwardedRef<TextInput>
  ) => {
    const innerRef = useRef<TextInput>(null);

    const handlePressInput = () => {
      innerRef.current?.focus();
    };

    return (
      <Pressable onPress={handlePressInput}>
        <S.Container
          style={isShadow ? shadow[2] : { backgroundColor }}
          $disabled={disabled}
          $isError={Boolean(touched) && Boolean(error)}>
          {icon}
          <S.TextInput
            $isIcon={!!icon}
            // @ts-expect-error: outline is not a valid style property
            style={{ outline: 'none', backgroundColor }}
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
          {touched && !!error && <S.ErrorText>{error}</S.ErrorText>}
        </S.Container>
      </Pressable>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
