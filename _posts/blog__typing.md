---
title: "[BLOG] 타이핑 애니메이션"
excerpt: "블로그 인트로 제작"
date: "2022.10"
author:
  name: "김지원"
category: "project"
---

# 타이핑 애니메이션

- intro로 타이핑 애니메이션 적용

## 적용 코드 : intro.tsx

```js

export default const Intro = () => {
  return <h1 className="typing">자신이 원하는 문구를 작성해주세요.</h1>;
};

```

## 적용 코드 : global.scss

```css
.typing {
  font-size: 2em;
  white-space: nowrap;
  position: fixed;
  color: transparent;
  transform: translate(0%, 90%);
  font-family: "Nanum Myeongjo";

  &::before {
    text-align: center;
    content: "자신이 원하는 문구를 작성해주세요.";
    position: absolute;
    color: black;
    overflow: hidden;
    border-right: 2px solid black;
    animation: typing 5s steps(31) infinite;
  }

  @keyframes typing {
    0% {
      width: 0%;
    }

    50% {
      width: 100%;
    }

    100% {
      width: 0%;
    }
  }
}

.text {
  margin: 40px 0;
  padding-top: 150px;
}
```

# 에러 발생
- position: fixed;로 인해 계속 고정되는 문제 발생.

## 상황
- 타이핑 애니메이션을 만들기 위해 position값이 fixed라서 스크롤 시 계속 고정되어 있는 상태
- 이를 해결하기 위해 스크롤할 경우 타이핑 애니메이션이 숨겨지거나 나타나게 해야 한다.
  - 할 일 : 타이핑 애니메이션 스크롤 시 사라지게 하기

## 해결
- 스크롤 동작이 발생할 경우 style 수정
```javascript
import { useEffect, useCallback, } from "react";

  ...
  
  const onScroll = useCallback(() => {
    const typing = document.querySelector('.typing') as HTMLElement | null; // 타이팅 애니메이션
    const text = document.querySelector('.text') as HTMLElement | null; // 테스트 태그
    const scrollY = window.pageYOffset; // 현재 페이지 높이

    if (scrollY > 10) { // 현재 스크롤이 10을 넘으면 타이핑 애니메이션 숨기기
      typing.style.visibility = 'hidden';
      text.style.marginTop = '20px';
    } else { // 현재 스크롤이 10이하면 타이핑 애니메이션 보이기
      typing.style.visibility = 'visible';
      text.style.paddingTop = '100px';
    }
  }, [])

  ...

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

```
