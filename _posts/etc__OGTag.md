---
title: 'OGTag'
coverImage: ''
date: '2021.07.24'
author:
  name: '김지원'
ogImage:
  url: ''
category: 'etc'
---

# OGTag : Open Graph Meta Tag
- 웹 링크 미리보기 화면 만드는 법

# OGTag란?
- (기사, 뉴스 소식이나 블로그 게시물 등을 마크업하는 방법
- 페이지에 대한 간략한 정보를 보여줄 수 있도록 함.
- *이것은 페이스북에서 웹사이트를 공유하기 좋게 하기 위해 만들어진 것
- html에 OGTag 입력
- meta태그의 property="og:---"를 하나 씩 기입하여 간략한 정보 표시


# OGTag를 이용하여 만드는 법
## 1. 기본 html에서 작성하는 법

## [예시 - html]
```html
        <head>
            <meta property="og:title" content="gwonkim의 github.io" />
            <meta property="og:type" content="article"/>
            <meta property="og:url" content="http://gwonkim.github.io"/>
            <meta property="og:description" content="깃헙 페이지입니다."/>
            <meta property="og:image" content="http://img.jpg"/>
        </head>
```

## js에서 작성하는 법(react 등)
    - *next를 설치하여 meta태그를 작성.(npm i next)

## [예시 - js(react - hooks)]
```javascript
        import Head from 'next/head';
        
        const Test = () => {

            ... 

            return(
                <>
                    <Head>
                        <meta property="og:title" content="gwonkim의 github.io" />
                        <meta property="og:type" content="article"/>
                        <meta property="og:url" content="http://gwonkim.github.io"/>
                        <meta property="og:description" content="깃헙 페이지입니다."/>
                        <meta property="og:image" content="http://img.jpg"/>
                    </Head>

                    ...

                </>
            );
        }
```

# 태그
## og:url
- 페이지의 표준 url 
## og:title
- 제목 
## og:description
- 간략한 설명 
## og:img
- 공유할 때 표시되는 이미지 url 
## og:type
- 미디어의 유형(기본값 : website, 여러 타입 사용 불가) 


# 참고 사이트
[OGTag](https://developers.facebook.com/docs/sharing/opengraph)
[개체 유형 참고 자료](https://ogp.me/)

