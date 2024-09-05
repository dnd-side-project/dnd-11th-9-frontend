import type { ReactNativeStyle } from '@emotion/native';
import { useMemo } from 'react';
import type { PressableProps } from 'react-native';

import type { SocialType } from '@/apis/member/member.type';
import AppleLogoSvg from '@/components/common/icon/apple-logo-svg';
import KakaoLogoSvg from '@/components/common/icon/kakao-logo-svg';
import Typography from '@/components/common/typography';
import * as S from '@/components/sign-in/LoginButton.styles';

type Props = Omit<PressableProps, 'children'> & {
  width?: ReactNativeStyle['width'];
  height?: ReactNativeStyle['height'];
  provider: SocialType;
};

function generateSocialButton(provider: SocialType) {
  switch (provider) {
    case 'KAKAO':
      return {
        icon: (
          <KakaoLogoSvg
            width={19}
            height={18}
          />
        ),
        backgroundColor: '#FEE500',
        text: '카카오 로그인',
        color: '#000000',
      };
    case 'APPLE':
      return {
        icon: (
          <AppleLogoSvg
            width={13}
            height={14}
          />
        ),
        backgroundColor: '#000000',
        text: 'Apple로 로그인',
        color: '#FFFFFF',
      };
  }
}

function LoginButton({ width = '100%', height = 54, provider, ...rest }: Props) {
  const { icon, backgroundColor, color, text } = useMemo(
    () => generateSocialButton(provider),
    [provider]
  );

  return (
    <S.Button
      style={{ width, height }}
      $backgroundColor={backgroundColor}
      {...rest}>
      {icon}
      <Typography
        variant='Headline1'
        color={color}>
        {text}
      </Typography>
    </S.Button>
  );
}

export default LoginButton;
