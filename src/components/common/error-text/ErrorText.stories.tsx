import type { Meta, StoryObj } from '@storybook/react';

import ErrorText from './';

const ErrorTextMeta: Meta<typeof ErrorText> = {
  title: 'common/ErrorText',
  component: ErrorText,
  argTypes: {
    error_message: {
      control: {
        type: 'text',
      },
      description: '에러 메시지를 설정합니다.',
    },
  },
};

export default ErrorTextMeta;

export const Primary: StoryObj<typeof ErrorText> = {
  args: {
    error_message: '올바르지 않은 형식입니다',
  },
};
