---
title: '[에러] React: CSS Error'
coverImage: "/assets/blog/image/css.png"
date: '2020.08.15'
author:
  name: '김지원'
ogImage:
  url: "/assets/blog/image/css.png"
category: 'error'
---

# React: CSS Error
## 발생

![cssError](https://user-images.githubusercontent.com/62700252/161536216-2dc241d8-5401-4cfb-86f5-b31c175d5c2f.PNG)
- css 적용 후 에러

## 원인
- next.js의 문서를 살펴보니 일반 css 적용 불가
  - ☞ [next.js css 관련 참고 문서](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)

## 해결
- 여러 해결 방법 중 css module화 방법 사용(이름.module.css)
  - ☞ [next.js css module 참고 코드](https://github.com/vercel/next.js/tree/canary/examples/basic-css)



## 주의사항

- className 작성시 {}(괄호) 사용!
- ""(따옴표) 사용 시 에러문구가 안 떠서 문제점 바로 알 수 없음, 자동 생성으로 인해 쉽게 발생하는 에러



## 틀린 방법("", 따옴표 사용)

```javascript
import styles from "css 위치";

const Hello1 = () => {
  return (
    <div className="styles.className">
      Hello World!
    </div>
  )
};
          
```

## 옳은 방법({}, 중괄호 사용)


```javascript
import styles from "css 위치";

const Hello2 = () => {
  return (
    <div className={ styles.className }>
    Hello World!
    </div>
  )
};

```

