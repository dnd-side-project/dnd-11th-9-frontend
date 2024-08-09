# Code Convention

> 팀만의 코드 문화를 정의합니다.

## 페이지

`app`내에 사용되는 페이지 단위의 `tsx` 파일들은 케밥 케이스를 이용합니다. 이는 url에 노출 되기 때문에 대문자가 아닌 소문자를 이용합니다.

### 모듈

모듈을 내보내기 위해서 `export` 방식을 사용하는 것이 아닌 `export default`방식을 사용합니다.

예를 들어 다음과 같이 작성합니다.

```typescript
import * as S from './styles.ts'

function CustomButton() {
  return (
    <S.Container>
      {...}
    < /S.Container>
  )
}

export default CustomButton;
```

## 컴포넌트

`/src/components`에 작성하는 컴포넌트들의 파일명은 모두 파스칼 케이스를 이용합니다. `CustomButton` 하지만 내보내는 파일의 경우 `import`문을
축약하기 위해서 `index.tsx`를 사용합니다.

### 이벤트 핸들러

이벤트 핸들러의 경우 화살표 함수, 나머지는 전부 `function`을 붙입니다. `function`에는 페이지, 컴포넌트, 커스텀 훅 유틸 함수등이 있습니다. 하지만 타입을
주기위해서는 화살표 함수를 사용해도 상관이 없습니다. 모듈 내보내는 과정만 중요하게 여깁니다.

또한 이벤트 핸들러의 경우 앞에 접두사 `handle-`을 붙입니다.

```typescript
import * as S from './styles.ts'

function CustomButton() {

  const handleClick = () => {
    console.log("버튼이 눌러졌습니다!")
  }

  return (
    <S.Container onPress={handleClick}>
      {...}
    < /S.Container>
  )
}
```

### Props 타입

Props 타입을 명시할 때는 `Type Props`를 이용하여 명시해줍니다. 만약 합성 컴포넌트 패턴과 같이 한 파일의 여러개의 Props이 들어가는 경우 컴포넌트 명 뒤로
-Props를 붙여줍니다.

예를 들어 다음과 같이 작성합니다.

`ButtonProps`, `TextProps`

### 반복되는 파일

반복되는 파일의 경우 접수다 `One` 또는 `Card`를 추가합니다.

## 스토리북 파일

`/components/common`에 추가되는 공용 컴포넌트의 경우

`Stories` 파일의 경우 `[컴포넌트명].stories.tsx`로 작성합니다.

## 스타일 파일

코드가 길어지거나 복잡한 파일의 경우 Emotion 으로 작성한 다른 파일로 분리해서 사용합니다.

예를 들어 다음과 같이 작성합니다.

```typescript
// styles.ts

export const Container = styled.View`
  // Cotainer 스타일링
`;
```

```typescript
// customButton.tsx
import * as S from './styles.ts'

function CustomButton() {
  return (
    <S.Container>
      {...}
    < /S.Container>
  )
}
```

앞에 S를 붙이는 이유는 기존 다른 컴포넌트들과 달리 `Emotion`을 사용하여 스타일링된 컴포넌트임을 구분하기 위해 추가한 것입니다.

### props를 받는 경우

props를 받는 경우 기존에 받을 수 있는 props와 비교할 수 있게 `$`를 붙여서 작명합니다.

```typescript
// styles.ts

export const Container = styled.View<{ $asChild: boolean }>`
  // Cotainer 스타일링
`;
```

```typescript
// customButton.tsx
import * as S from './styles.ts'

function CustomButton() {
  return (
    <S.Container $asChild >
    {...}
    < /S.Container>
  )
}
```

## hooks, utils, store

해당 폴더내의 파일들은 카멜 케이스를 따라갑니다.

예를 들어 다음과 같습니다.

`useSession`

### 모듈

모듈을 내보내기 위해서 `export` 방식을 사용합니다. 추가된 파일이 있을 경우 같은 레벨의 index.ts에 경로명과 모듈 변수를 명시해줍니다.

```typescript
export { STORAGE_KEYS } from './storageKeys';
```

## constants

해당 상수를 관리하는 폴더들의 파일명은 카멜 케이스로 짓습니다. 하지만 안에서 사용하는 상수들의 경우 스크림 스네이크 케이스를 사용합니다.

```typescript
const STORAGE_KEYS = {
  ON_BOARDING: 'onboarding',
  SESSION: 'session',
} as const;

export { STORAGE_KEYS };
```
