---
title: '[에러] getStaticProps props undefined'
coverImage: '/assets/blog/preview/box.jpg'
date: '2022.04.04'
author:
  name: '김지원'
ogImage:
  url: '/assets/blog/preview/box.jpg'
category: 'error'
---

# getStaticProps undefined

## 발생
- next의 getStaticProps를 사용하여 데이터를 가져올 때는 보이지만 컴포넌트에 전달 시 undefined

## 해결
- _app.js에서 component에 props 파라미터로 전달 설정
- 이후 pages의 다른 페이지에서 props 전달 정상 작동


```javascript
// _app.js
import App from 'next/app';

function MyApp({ Component, pageProps }) {
    ...
  return <Component {...pageProps} />
}


MyApp.getStaticProps = async (ctx) => {
  const appProps = await App.getStaticProps(ctx);
  return { ...appProps }
}
export default App;

```

[참고자료: stackoverflow](https://stackoverflow.com/questions/63434733/getting-props-as-undefined-in-component-returned-from-getstaticprops)
[참고자료: next.js 공식문서 - custom App](https://nextjs.org/docs/advanced-features/custom-app)