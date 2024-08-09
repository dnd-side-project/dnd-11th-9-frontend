## [Expo SecureStore](https://docs.expo.dev/versions/latest/sdk/securestore/)

Expo SecureStore 라이브러리는 로컬 장치에 데이터를 키-값 쌍으로 안전하게 저장하는 방법을 제공합니다. 각 Expo 프로젝트에는 별도의 스토리지 시스템이 있습니다.

> 값의 크기 제한은 2048바이트 입니다. 더 큰 값을 저장하려 할 경우 실패할 수 있습니다.

```shell
npx expo install expo-secure-store
```

```typescript
import * as SecureStore from 'expo-secure-store';

export async function setStorageItemAsync(key: string, value: string | null) {
  if (Platform.OS === 'web') {
    try {
      if (value === null) {
        // web의 경우 localStorage에 직접적으로 접근합니다.
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
    } catch (e) {
      console.error('Local storage is unavailable:', e);
    }
  } else {
    if (value == null) {
      // web이 아닐 경우 SecureStore에 접근합니다.
      await SecureStore.deleteItemAsync(key);
    } else {
      await SecureStore.setItemAsync(key, value);
    }
  }
}
```
