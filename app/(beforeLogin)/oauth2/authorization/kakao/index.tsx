import styled from '@emotion/native';
import { Redirect } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import type { WebViewNavigation } from 'react-native-webview';
import WebView from 'react-native-webview';

import { getSize } from '@/utils';

const KAKAO_LOGIN_URI = `${process.env.EXPO_PUBLIC_SERVER_URL}/oauth2/authorization/kakao`;

function KakaoLoginScreen() {
  const handleNavigationChangeState = (event: WebViewNavigation) => {
    console.log(event.url);
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
