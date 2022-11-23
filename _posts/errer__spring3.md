---
title: "[에러] Uncaught TypeError: Cannot read properties of null (reading 'style')"
excerpt: "java | spring | error"
coverImage: '/assets/blog/image/jsNull.jpg'
date: "2022.10"
author:
  name: "김지원"
ogImage:
  url: '/assets/blog/image/jsNull.jpg'
category: "errer"
---

# 발생

- js에서 style 변경 시 오류 발생

```js
  banner.js:8 Uncaught TypeError: Cannot set properties of undefined (setting 'clientWidth')
```

![jsNull](https://user-images.githubusercontent.com/62700252/203470643-34cef2b2-0b2a-4b0e-b01b-328ab448f73c.jpg)

# 원인

- 1. getElementById에 넘긴 id가 idDOM에 없어 getElementById메서드가 Null을 반환.

  - 그래서 style 값의 속성에 액세스하려고 할 때 Null이라서 오류.

- 2. 제이퀴리와 자바스크립트 혼용 불가

# 해결

## 1. id의 값을 확인할 것

## 2. 제이쿼리 또는 자바스크립트 둘 중 하나만 사용할 것
