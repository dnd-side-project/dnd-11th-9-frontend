import type { Meta, StoryObj } from '@storybook/react';

import LoginButton from '@/components/sign-in/LoginButton';

const LoginButtonMeta: Meta<typeof LoginButton> = {
  title: 'signIn/LoginButton',
  component: LoginButton,
  argTypes: {
    provider: {
      controls: {
        type: 'select',
        options: ['APPLE', 'KAKAO'],
      },
    },
  },
};

export default LoginButtonMeta;

export const KakaoLoginButton: StoryObj<typeof LoginButton> = {
  name: '카카오톡 로그인 버튼',
  args: {
    provider: 'KAKAO',
  },
};

export const AppleLoginButton: StoryObj<typeof LoginButton> = {
  name: '애플 로그인 버튼',
  args: {
    provider: 'APPLE',
  },
};
