---
title: State
date: 2021
---
# GIT : State(Working Tree)
## Working tree와 Staging area
> working tree
- git 버전 관리 대상인 소스코드 폴더(=working directory)
> staging arag
- local repository와 working tree 사이의 가상의 공간

+ working tree에 있는 모든 코드를 저장소에 보관하는 것이 아닌 staging area에 등록된 파일만 기록
+ 내가 원하는 변경사항만 기록 가능
+ staging area를 index라고 부르기도 함.


### Staging area 등록 대상
- untracked(새로 만든 파일)
- modified(수정한 파일)

### 현재 상태
- main or master => main(master) branch의 최신 Commit
- HEAD => 현재 작업 중인 브랜치의 최신 Commit
- origin/main => 현재 다운로드/업로드한 remote repository의 main branch의 최신 commit
    - *내가 다운로드/업로드한 이후에 remote repository에 또 새 commit이 등록되어 있을 수 있음.(공동 작업 시)

### Working tree의 파일 상태 확인 명령어
- git status

### Staging area 등록/취소 명령어
> 등록
- git add 파일명
    - (* -> 모든 파일, ex: git add *, git add *.js)
> 취소
- git reset 파일명
- git rm --cashed 파일명
    - (위 명령어들은 똑같은 명령어)
                