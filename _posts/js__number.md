---
title: '[JS] Number'
coverImage: '/assets/blog/preview/box.jpg'
date: '2021'
author:
  name: '김지원'
ogImage:
  url: '/assets/blog/preview/box.jpg'
---

# Number

## Number
> javaScript 경우 정수 실수 구분없이 모두 실수로 처리

> 배정밀도 64비트 부동소수점 형식 따름

> 정수만 표현하기 위한 데이터 타입이 별도로 존재하지 X

+ 정수 실수 2진수 8진수 16진수
    + 배정밀도 64비트 부동소수점 형식의 2진수로 저장
    + 값 참조 시 모두 10진수로 해석
+ 그래서 정수 10과 실수 10.0을 비교할 경우 true가 나옴.
+ 8진수로 표현한 54와 16진수로 표현한 54를 비교한 경우에도 true가 나옴

## 특별한 값 표현가능한 3가지

- Infinity(양의 무한대)
- -Infinity(음의 무한대)
- NaN(not-a-number, 산술연산불가)
    - *대소문자 구분함 nan !== NaN