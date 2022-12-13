---
title: '[unix] 기본 명령어'
coverImage: ''
date: '2021.12.22'
author:
  name: '김지원'
ogImage:
  url: ''
category: 'unix'
---

# 유닉스 기본 명령어

## 표준 입력과 표준 출력
- java와 같은 언어에서 입력을 받을 때
  - System.in 객체를 이용하고, 출력할 때 System.out 객체를 사용
- ex) System.out.print("Hello World!");
- 이 입력과 출력을 표준 입력, 표준 출력이라고 함.

## Redirection
- &lt; or &gt;
  - 표준 입력과 표준 출력의 방향을 변경 가능.
  - ex) ls > list.txt
  - ls 명령의 출력이 화면으로 출력되지 않고 list.txt 파일에 저장.
  - (list.txt 파일이 존재한다면 덮어쓰고 없으면 새로 생성.)

## Pipe( | )
- 이전 명령의 출력이 그 다음 명령의 입력으로 파이프처럼 연결.
- 입출력 연결하는 것 pipe
- ex) ls -l | gzip > list.txt.gz
- ls -l 명령의 출력을 gzip의 입력으로 넘겨 압축한 출력 데이터를 list.txt.gz에 저장

## [Filter](./unix__filter)
- 파이트 방식으로 연결해 사용하는 것이 주 목적인 명령
