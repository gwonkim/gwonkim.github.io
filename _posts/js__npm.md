---
title: '[JS] npm'
coverImage: '2021.11.10'
date: '2021'
author:
  name: '김지원'
ogImage:
  url: ''
category: 'js'
---

## 설치 및 버전 확인
- node -v
- npm -v

## npm 초기화 설정
- npm init


## dependencies(의존성) 설치
* 특정 버전을 설치하고 싶다면 @ 문자 사용
    * ex: npm i next@8, next 8버전 설치
npm i next(필수)
npm i react(필수)
npm i react-dom(필수)
npm i prop-type(선택)
- 한 번에 설치 가능
    - npm i next react react-dom prop-type

## devDependencies(개발 의존성) 설치
npm i -D eslint 
npm i -D eslint-plugin-import
npm i -D eslint-plugin-react 
npm i -D eslint-plugin-react-hooks
npm i -D nodemon
npm i -D webpack

- 한 번에 설치 가능
    - npm i -D eslint eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks nodemon webpack
