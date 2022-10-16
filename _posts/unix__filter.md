---
title: '[unix] Filter'
coverImage: ''
date: '2021'
author:
  name: '김지원'
ogImage:
  url: ''
category: 'unix'
---

# Filter
- 필터 명령어

## wc
- Word Count
- 파일의 내용의 줄, 단어, 크기를 출력하는 명령어
- wc 파일명
- 옵션) -l(줄 수), -w(단어 수), -c(byte 수)
  - ex) wc -l list.txt(list.txt의 줄 수만 출력)
  - ex) ls | wc -l 
  - 현재 디렉토리의 파일 목록을 출력 후 출력된 목록의 줄 수 출력 = 현재 디렉터리의 파일 수 출력

## find
- 하위 디렉토리들에서 특정 파일을 찾는 명령
- 옵션 -name(이름), -o(OR), -size + OR - 숫자, -type d OR f
- ex) find . -name "*.java" -o -name "*.jsp" -o -size -2K
  - 현재 디렉토리 중 파일 확장자가 java나 jsp이거나 파일크기가 2k이하인 파일 찾기
- ex) find . -type d(현재 디렉토리 아래에서 디렉토리의 경로명 출력)

## xargs
- 이전 데이터의 목록을 각각 다음 명령 실행
- ex) find src -name "*.java" | wc -l 
  - src 디렉토리 아래의 *.java 파일의 경로명을 출력하고 표준 입력에서 입력된 목록의 줄 수 출력
    - => src 폴더 아래의 *.java 파일의 수를 출력
- ex) find src -name "*.java" | xargs wc -l 
  - src 디렉토리 아래의 *.java 파일의 경로명을 출력하고 표준 입력에서 입력된 목록의 각각 파일의 줄 수 출력
    - => src 폴더 아래의 *.java 파일 별의 줄 수 출력)

## head
- 입력에서 선두 몇 줄만 출력
- ex) head -n 10 test.java
  - test.java 파일의 선두 10줄 출력

## grep
- 파일에서 문자열 패턴을 찾아 그 패턴이 포함된 줄만 출력
- 표준 입력에서 문자열 패턴을 포함하는 줄만 출력하는 필터로 사용
          가능
- ex) grep main *.java
  - 현재 폴더의 java 파일 중 main이라는 문자열이 있는 파일명 출력
- ex) ls -l | grep zip
  - 현재 폴더에서 zip 문자열이 포함된 줄 출력, 압축 파일 찾기

## less
- 표준 입력의 내용을 한 페이지 씩 끊어서 출력해주는 필터
- ex) ls -l | less(현재 디렉토리의 목록을 한 화면 씩 끊어서 출력)

