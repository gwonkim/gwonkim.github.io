---
title: '[unix] ZIP'
coverImage: ''
date: '2022.02.02'
author:
  name: '김지원'
ogImage:
  url: ''
category: 'unix'
---

# 압축 : ZIP
- 압축 명령어

# zip 
- 압축 알고리즘은 완전히 무료가 아니라서 GNU 프로젝트에서 제작한 압축 알고리즘 gzip 사용

## gzip
- 파일 한 개씩 따로 압축하는 명령어
## tar
- 디렉토리나 여러 파일 묶어서 압축하는 명령어

## gzip
- 압축하기 : gzip 파일명 => 파일명.gz
- 압축풀기 : gunzip list.txt.gz
- 주의사항 및 제약
  - gzip의 경우 압축하거나 압축 풀 때 원본이 삭제됨.
  - 파일 한 개씩 따로 압축 파일 생성
  - 여러 파일을 묶어서 압축 불가능(디렉토리 압축 불가능)
      
## tar
- 압축하기
  - tar -cvzf 압축파일명.tgz  파일1 파일2 파일3 
  - tar -cvzf 압축명.tgz  디렉토리

- 압축풀기
  - tar -xvf 압축명.tgz

- 주의사항 및 제약
  - 디렉토리나 여러 파일을 묶어 압축할 때 사용

## 활용 방법
- 특정 파일을 찾아 압축하기
  - find src -name "*.js" | xargs tar -cvzf src.tgz

