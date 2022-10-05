---
title: '[Git] Command'
date: '2021'
author:
  name: '김지원'
category: 'git'
---

# GIT : Command

## 기본적인 git 순서 
>> ADD - COMMIT - PUSH - PULL

## 깃 명령어
> Git Version 확인
: git --version 

> Clone
: git clone url(ex: https://github.com/ooooo.git)

> Commit
Add : git add 수정코드패스(ex: git add pages/index.html)
Commint : git commit -m “내용”(ex: git commit -m "index.js 클릭 버그 수정")

> Commit reset
: git reset(add한 파일 취소)
: git reset fileName(파일 삭제)
: git rm --cached fileName(파일 삭제, 위와 같은 명령어)
: git reset merge(머지한 코드 취소)

> Stash
: git stash(코드 임시 저장, stash 영역에 잠시 저장)
: git stash pop(마지막에 저장한 코드 불러오기)
: git stash list(stash의 목록 확인)

> Push
: git push

> pull vs fetch
- 풀 : git pull(git서버에서 최신 코드 받아와 merge 하기, fetch+merge)
    - pull(merge O, 즉시 반영O - 충돌 발생 가능)
- 패치 : git fetch(git서버에서 최신 코드만 받아옴, 다운로드)
    - fetch(merge X, 즉시 반영X)

> Merge
- git merge branchName1 branchName2(합칠 브랜치의 이름 2개)

> Branch
깃 브랜치 확인 : git branch, *(별)표시가 현재 브랜치 
>> Checkout
- git checkout branchName
    - local repository에서 remote repository의 브랜치로 체크아웃
    - (맨 처음만 해당, 이후에는 git checkout)
- git checkout -t branchName
    - (t = remote)

> Log
>> git log(로그 보기)
>> git log --graph (그래프 형태로 로그를 보여줌)
