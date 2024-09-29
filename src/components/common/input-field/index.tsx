import type { ForwardedRef, ReactNode } from 'react';
import React, { forwardRef, useRef } from 'react';
import type { TextInput } from 'react-native';
import { type TextInputProps } from 'react-native';

import ErrorText from '@/components/common/error-text';
import { shadow } from '@/styles/shadow';
import { color } from '@/styles/theme';
import { mergeRefs } from '@/utils';

import * as S from './style';

interface InputFieldProps extends TextInputProps {
  isShadow?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  error?: string;
  icon?: ReactNode;
}

const InputField = forwardRef(
  (
    {
      backgroundColor = color.Background.Normal,
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
      <S.WrapperBox onPress={handlePressInput}>
        <S.Container
          style={isShadow && shadow[2]}
          $backgroundColor={backgroundColor}
          $disabled={disabled}
          $isError={Boolean(error)}>
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
        </S.Container>
        {!!error && <ErrorText error_message={error} />}
      </S.WrapperBox>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
