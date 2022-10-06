---
title: '[NEXT] NEXT.js'
coverImage: ''
date: '2021'
author:
  name: '김지원'
ogImage:
  url: ''
category: 'next'
---

# NEXT.js
## next.js 용도
> react에서 SSR 구현
> 검색 엔진 문제 해결(helmet으로 바꾼 정보를 가져오지 못하는 경우 등 해결)

## CSR vs SSR
- react는 SPA(CSR)
    - 미리 만들어 놓고 필요한 것만 가져오는 방식

## NEXT
- 설치
    - npm i next
- Rounting
    - pages 디렉토리 아래의 폴더와 파일을 라우트
        - pages/index.js 메인페이지, URL = '/'
        - pages/profile.js 프로필페이지, '/profile'
    - pages의 형식
        - 컴포넌트의 파일 이름은 소문자로(다른 폴더는 기본 대문자)
        - 컴포넌트의 이름은 형식없음(자유)
        - 컴포넌트는 export default로 설정해야 인식&라우트
        - 페이지 이동&lt;a&gt; 시 next/link를 이용하여 래핑해야 가능
            - 이 경우 CSR으로 실행됨
    
```javaScript
import Link from 'next/link';

const helloWorld = () => {
    return (
        <Link href={'/'}>
            <a>Home</a>
        </Link>
    )
    ...
}

```
   
   
- metadata
    - html태그나 title 등의 메타데이터를 수정하기 위해서는 next/head를 사용
```javaScript
import Head from 'next/head';

const helloWorld = () => {
    return (
        <Head>
            <title>HELLOWORLD</title>
        </Head>
    )
    ...
}

```
   
      
- style
    - sass와 css, css module 기본적으로 지원