---
title: '[에러] React 개발 에러'
coverImage: '/assets/blog/preview/box.jpg'
date: '2020'
author:
  name: '김지원'
ogImage:
  url: '/assets/blog/preview/box.jpg'
---

# 개발 에러 로그

&nbsp;&nbsp;&nbsp;
## TypeError: Cannot read property 'tap' of undefined
### 발생

![webpackError1](https://user-images.githubusercontent.com/62700252/161536255-437c4b99-2c09-4760-978d-1b6b08b82889.PNG)
- npm run dev를 한 후 발생.

### 원인
- webpack 버전이 5이상일 경우 발생.

### 해결
- webpack downgrade(4.x 버전 이내로)
```
$ npm i webpack@4.44.0
```

![webpackError2](https://user-images.githubusercontent.com/62700252/161536264-47e9ca1a-ced7-4de4-a2f0-c3fcf8743a3f.PNG)


&nbsp;&nbsp;&nbsp;
## React: CSS Error
### 발생

![cssError](https://user-images.githubusercontent.com/62700252/161536216-2dc241d8-5401-4cfb-86f5-b31c175d5c2f.PNG)
- css 적용 후 에러

### 원인
- next.js의 문서를 살펴보니 일반 css 적용 불가
  - ☞ [next.js css 관련 참고 문서](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)

### 해결
- 여러 해결 방법 중 css module화 방법 사용(이름.module.css)
  - ☞ [next.js css module 참고 코드](https://github.com/vercel/next.js/tree/canary/examples/basic-css)
- 주의사항
  - className 작성시 {}(괄호) 사용!
  - ""(따옴표) 사용 시 에러문구가 안 떠서 문제점 바로 알 수 없음, 자동 생성으로 인해 쉽게 발생하는 에러
      
+ 틀린 방법("", 따옴표 사용)

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

+ 옳은 방법({}, 중괄호 사용)

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


&nbsp;&nbsp;&nbsp;
## JavaScript_heap_out_of_memory 
### 발생

![heapErr](https://user-images.githubusercontent.com/62700252/161536231-94db4d67-358b-4850-ac47-9df6e184b6ac.png)
- npm run dev를 통해 실행하던 중 터미널에서 위 경고창 등장 

### 원인
- 구글링을 통해 메모리부족 문제라고 파악했으나 메모리 문제X
- 컴포넌트의 오류
   
### 해결
- 컴포넌트를 조금씩 지워서 문제인 컴포넌트를 확인 후 수정

## 
