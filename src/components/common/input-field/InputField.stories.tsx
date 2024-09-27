import { Ionicons } from '@expo/vector-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';
import { View } from 'react-native';

import { color } from '@/styles/theme';

import InputField from './';

const InputFieldMeta: Meta<typeof InputField> = {
  title: 'common/InputField',
  component: InputField,
  argTypes: {
    multiline: {
      control: {
        type: 'boolean',
      },
      description: '여러 줄 입력 여부를 설정합니다.',
    },
    touched: {
      control: {
        type: 'boolean',
      },
      description: '터치 여부를 설정합니다.',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: '비활성화 여부를 설정합니다.',
    },
    placeholder: {
      control: {
        type: 'text',
      },
      description: '플레이스홀더를 설정합니다.',
    },
    error: {
      control: {
        type: 'text',
      },
      description: '에러 메시지를 설정합니다.',
    },
  },
};

export default InputFieldMeta;

export const Primary: StoryObj<typeof InputField> = {
  args: {
    placeholder: '프로젝트의 이름을 적어주세요',
  },
  render: (args) => {
    const [touched, setTouched] = useState(false);
    const [error, setError] = useState('');

    const onChangeText = useCallback((text: string) => {
      if (text.length > 8) {
        setError('올바르지 않은 형식입니다');
      } else {
        setError('');
      }
    }, []);

    const onFocus = useCallback(() => {
      setTouched(true);
    }, []);

    return (
      <View style={{ flex: 1, backgroundColor: color.Background.Alternative, padding: 20 }}>
        <InputField
          error={error}
          touched={touched}
          onChangeText={onChangeText}
          onFocus={onFocus}
          {...args}
        />
      </View>
    );
  },
};

export const WithIcon: StoryObj<typeof InputField> = {
  args: {
    icon: (
      <Ionicons
        name='search'
        size={24}
        color={color.Label.Normal}
      />
    ),
  },
};

export const MultiLine: StoryObj<typeof InputField> = {
  args: {
    multiline: true,
    icon: (
      <Ionicons
        name='search'
        size={24}
        color={color.Label.Normal}
      />
    ),
  },
};
