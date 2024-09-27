import { AntDesign } from '@expo/vector-icons';
import type { ForwardedRef, ReactNode } from 'react';
import React, { forwardRef, useRef } from 'react';
import type { TextInput } from 'react-native';
import { type TextInputProps } from 'react-native';

import Typography from '@/components/common/typography';
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
      backgroundColor = color.Background.Normal,
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
      <S.WrapperBox onPress={handlePressInput}>
        <S.Container
          style={isShadow && shadow[2]}
          $backgroundColor={backgroundColor}
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
        </S.Container>
        {touched && Boolean(error) && (
          <S.ErrorBox>
            <AntDesign
              name='exclamationcircleo'
              size={14}
              color={color.Status.Error}
            />
            <Typography
              color={color.Status.Error}
              variant='Label1/Normal'>
              {error}
            </Typography>
          </S.ErrorBox>
        )}
      </S.WrapperBox>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
