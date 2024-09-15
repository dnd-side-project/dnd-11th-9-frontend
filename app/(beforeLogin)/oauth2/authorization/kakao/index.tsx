import styled from '@emotion/native';
import { Redirect, useRouter } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import type { WebViewNavigation } from 'react-native-webview';
import WebView from 'react-native-webview';

import { getSize } from '@/utils';

const KAKAO_LOGIN_URI = `${process.env.EXPO_PUBLIC_SERVER_URL}/oauth2/authorization/kakao`;

function KakaoLoginScreen() {
  const router = useRouter();

  const handleNavigationChangeState = (event: WebViewNavigation) => {
    const url = new URL(event.url);
    const params = new URLSearchParams(url.search);

    const token = params.get('token');
    const refresh = params.get('refresh');

    router.push({ pathname: '/oauth2/authorization/login', params: { token, refresh } });
  };

  if (Platform.OS === 'web') {
    return <Redirect href={KAKAO_LOGIN_URI} />;
  }

  return (
    <S.Container>
      <WebView
        source={{
          uri: KAKAO_LOGIN_URI,
        }}
        injectedJavaScript={"window.ReactNativeWebView.postMessage('')"}
        onNavigationStateChange={handleNavigationChangeState}
      />
    </S.Container>
  );
}

const S = {
  Container: styled.SafeAreaView`
    flex: 1;
  `,
  KaKaoLoadingContainer: styled.View`
    align-items: center;
    justify-content: center;
    height: ${getSize.deviceHeight};
    padding-bottom: 100px;
    background-color: ${(props) => props.theme.color.Background.Normal};
  `,
};

export default KakaoLoginScreen;
