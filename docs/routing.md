# Folder Routing

> 폴더 구조를 정의합니다.

폴더 구조는 다음과 같은 구조를 가집니다.

```text
🗂️ app
    ⚛️ _layout.tsx  (모든 사용자가 접근 가능한 라우트)
    ⚛️ on-boarding.tsx (서비스 소개 페이지)
    ⚛️ sign-in.tsx (세션이 있다면 곧바로 메인 화면으로 보냅니다.)
    🗂️ (app)
        ⚛️ _layout.tsx (🔏 인증 세션이 있어야지만 접근이 가능한 라우트)
        ⚛️ index.tsx (메인 화면)
        ...
```

`Expo SecureStore`를 이용하여 앱 스토리지에 안전하게 로그인 세션을 저장해둡니다. 때문에 이후에 로그인을 하였을 때 곧바로 들어올 수 있습니다.

초기 화면에 들어올 경우 (app) \_layout 에서 로그인 여부와, 온보딩 조회여부를 파악하여 올바를 페이지로 보냅니다. 만약 로그인을 하였다면 (app) 내에서 실행할 수 있습니다.
