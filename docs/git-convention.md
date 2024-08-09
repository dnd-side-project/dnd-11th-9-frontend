# Git Convention

> 팀만의 깃 문화를 정의합니다.

## Commit

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드, 리팩토링 테스트 코드 추가
- `chore`: 빌드 업무 수정, 패키지 매니저 수정

## Issue

웹 빌드 세팅을 해야 한다 → 영어로 작명

**[Chore] expo-web-build**

커밋은 **소문자**. 커밋 메시지는 간결하고 명확하게

feat: expo 추가

bug: expo 버그 발생

fix: expo 버그 수정

## Pull Request

PR 명은 다음과 같습니다.

[작업 분류]/#[이슈번호]-[이슈이름]

- feat/#1
- feat/#123-expo-web-build

`merge` 는 `squash merge` 로 진행합니다.

기능 구현이 완료되면 dev에 `merge`

목표가 끝났을 경우 (버전) main `merge`

## Review

한번 봐준 건 두 번 이상 보지 말기

[**Pn 룰**](https://blog.banksalad.com/tech/banksalad-code-review-culture/)

p1

이거 좀 수정해주세요

p5

이건 수정 안해도 될 거 같아요
