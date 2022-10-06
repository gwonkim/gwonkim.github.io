---
title: "[에러] TypeError: Cannot read property 'tap' of undefined"
coverImage: "/assets/blog/image/typeError.png"
date: '2020'
author:
  name: '김지원'
ogImage:
  url: "/assets/blog/image/typeError.png"
category: 'error'
---

# TypeError: Cannot read property 'tap' of undefined
## 발생

![webpackError1](https://user-images.githubusercontent.com/62700252/161536255-437c4b99-2c09-4760-978d-1b6b08b82889.PNG)
- npm run dev를 한 후 발생.

## 원인
- webpack 버전이 5이상일 경우 발생.

## 해결
- webpack downgrade(4.x 버전 이내로)


```
$ npm i webpack@4.44.0
```

![webpackError2](https://user-images.githubusercontent.com/62700252/161536264-47e9ca1a-ced7-4de4-a2f0-c3fcf8743a3f.PNG)


=====