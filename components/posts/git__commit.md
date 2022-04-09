```

title : Commit
date : 2021

```

# GIT : Commit

## Commit
- 기본적인 git 순서
    - ADD - <b>COMMIT</b> - PUSH - PULL
- local repository에 등록하는 작업
- 소스코드 변경 이력을 저장소에 기록하는 작업
- Commit meseage: 작업 내용 입력
    - 첫째 줄: 제목
    - 둘째 줄: 비움
    - 셋째 줄: 본문
            
## Commit Hash
- 알파벳과 숫자로 이뤄진 40자리 hash 자동 부여
- commit ID
            
            
## commit의 상태
### untracked
> 한 번도 commit되지 않고 staging area에 등록되지 않은 새 파일.
                
### staged
> 한 번도 commit되지 않은 새 파일, staging area에 등록한 파일(untracked -> staged)
> 한 번 등록되고 수정한 파일, staging area에 등록한 파일(modified -> staged)
                
### unmodified
> commit 이후에도 수정되지 않은 파일

### modified
> commit 이후에 수정되었지만, staging area에 등록되지 않은 파일
    

## Commit의 취소(Amend Commit)
- git commit --amend
- 커밋을 하고서 빠진 부분이 있거나 커밋 메시지 등을 수정하고 싶을 때 사용
- 두 커밋을 하나로 합치고 싶을 때(임시 커밋을 한 경우)
- 직전 커밋 이후 수정한 부분이 없다면 커밋 메시지만 수정됨
    
## Git Log
> git log(로그 보기)
> git log --graph (그래프 형태로 로그를 보여줌)

## Git Log의 상태
> main or master => main(master) branch의 최신 Commit
> HEAD => 현재 작업 중인 브랜치의 최신 Commit
> origin/main => 현재 다운로드/업로드한 remote repository의 main branch의 최신 commit
> *내가 다운로드/업로드한 이후에 remote repository에 또 새 commit이 등록되어 있을 수 있음.(공동 작업 시)

> git fetch 다운로드
> git merge 병합

