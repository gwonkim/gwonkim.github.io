---
title: '[unix] 기초 명령어'
coverImage: ''
date: '2021'
author:
  name: '김지원'
ogImage:
  url: ''
category: 'unix'
---

# 유닉스 기초 명령어
## 경로명

> 디렉토리 = 폴더(운영체제에 따른 용어 다름, 윈도우 리눅스)

- 디렉토리 구분 문자
    - /
    - ex) ~/documents/text(홈디렉토리의 문서 폴더의 text 디렉토리로 이동)

- 절대 경로
    - 경로명이 /문자로 시작된 경로
    - ex) rm /test/name.java
        - (루트 디렉토리 아래의 test 디렉토리 아래에 있는 name.java 파일 삭제) 

- 상대경로
    - 경로명이 /문자로 시작하지 않는 경로
    - ex) rm test/name.java
        - (현재 디렉토리에서 text 디렉토리 아래에 있는 name.java 파일 사작)

- 부모 디렉토리(상위 디렉토리)
    - ..
    - ex) rm ../test/col.js
        - (상위 or 부모 디렉토리로 이동해 test 디렉토리에 있는 col.js 파일 삭제 )

- 현재 디렉토리
    - .
    - ex) rm ./test.c
        - (현재 디렉토리의 test.c 파일 삭제)

- 홈 디렉토리
    - ~
    - ex) rm ~/text.txt
        - (홈 디렉토리에 있는 text.txt 파일 삭제)

## 명령어
> pwd
>> 현재 위치한 디렉토리 출력

> cd
>> change directory(디렉토리 이동)

> mkdir
>> make directory

> rmdir
>> remove directory

> rm
>> remove

> mv
>> move

> cp
>> copy

> ls
>> list(현재 디렉토리의 파일과 서브 디렉토리에 대한 리스트 출력)

> cat
>> concatenate(파일 내용 화면에 출력)

> clear
>> 화면 내용 지우기

## 와일드 카드(Wild Card)
- *정규식과는 조금 다름
> *
>> 어떤 문자열과도 일치(빈 문자열 포함)

> ?
>> 어떤 한 문자와 일치

> [abc]
>> a문자 b문자 c문자 중 한 문자와 일치
