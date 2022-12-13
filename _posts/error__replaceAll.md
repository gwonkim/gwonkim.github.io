---
title: '[에러] replaceAll is not a function'
coverImage: '/assets/blog/image/replaceAll_node.jpg'
date: '2022.10.11'
author:
  name: '김지원'
ogImage:
  url: '/assets/blog/image/replaceAll_node.jpg'
category: 'error'
---

# Node.js - replaceAll
![error_nodeReplaceAll](https://user-images.githubusercontent.com/62700252/198299206-d5941cf1-21f1-4f35-abdb-879708cde3bd.jpg)

## 원인
- node.js에서는 replaceAll 함수를 제공하지 않음.
- 브라우저에 따라 제공되는 경우 존재.
- (프로그래머스에서는 정상작동)

## 해결 방법
- string.replace() 함수에 정규표현식을 이용해 사용.
- g를 사용해 전역에서 치환하도록 설정

## 코드 예시
```js
let word = ["aya", "ye", "woo", "ma"];
let b = 'woo';
// 같은 결과
word.replaceAll(b, ""); 
word.replace(`/${b}/g`, "");

```
