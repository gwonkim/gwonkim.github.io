---
title: '[Git] Repository'
date: '2021'
author:
  name: '김지원'
category: 'git'
---

# GIT : repository
------------
# state : 상태

        <ul>
- git repository<br />
    - git repository는 소스코드 파일의 수정 과정에서 만들어진 전체 버전이 전부 저장됨.<br />
    + local repository
    + remote repository

## 1. local repository
- 개인 PC에 생성되는 개인 전용 repository
- 각자의 PC의 local repository에서 버전 관리 및 작업을 하다가 공유해야 할 때 remote repository에 업로드 

## 2. remote repository
- 팀원끼리 공유되는 repository<br />
- 팀원 모두 접근할 수 있는 remote 서버에 만들어짐.<br />
- ex) github

# local repository와 remote repository 연결 명령어
> 내 pc에 local repository 만드는 법
1. 대상 폴더에 git 설치
    - git init
2. remote repository 연결
    - git remote add origin git_URL(ex: git remote add https://github.com/test/test.git)
3. git remote 연결 확인
    - git remote -v
4. 최초 업로드(push)
    - git push -u origin main(맨 처음)
    - git push(이후)
5. Branch 이름 변경
    - *git 기본 브랜치의 이름이 main이 아니고 master인 경우 main으로 변경하는 코드
    - *생략 가능
    - git branch -M main

# Clone 만드는 법
- git clone git_URL(ex: git clone https://github.com/test/test.git)
