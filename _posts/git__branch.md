---
title: '[Git] Branch'
date: '2021'
author:
  name: '김지원'
ogImage:
---

# GIT : Branch

## Branch
- 독립적인 작업 공간
- 독립적인 구현 작업 마다, 브랜치를 따로 만들어 구현 작업을 진행

+ fast forward(부모-자식)
    + 부모의 코드를 그대로 자식이 계승하여 내용이 추가된 경우
```
    (A - aaa) -> (B - aaa+bbb)
```

* merge(형제 관계)
    * 형제 관계의 상태의 브랜치의 경우 병합이 필요함
    * 동일 코드를 수정했을 경우 Merge Conflict 발생함.
```

(A - aaa)  --- 
              (Merge - aaa+bbb)
(B - bbb)  --- 

```

## 브랜치 명령어

> 브랜치 생성
>> git branch 브랜치_이름(생성O, 전환X)
>> git branch -b 브랜치_이름(생성O, 전환O)

> 브랜치 목록 확인
   >> git branch

> 브랜치 전환
>> git checkout 브랜치_이름
>> git checkout -b 브랜치_이름(생성O, 전환O)

> 브랜치 병합
>> A브랜치에서 작업한 내용 Main브랜치에 병합 방법

- main 브랜치로 전환
    - git checkout main

- A브랜치에서 작업한 내용 현재 브랜치(Main)에 병합
    - git merge A

> 브랜치 삭제
>> git branch -d 브랜치_이름
>> 브랜치 이름(label)만 삭제되는 것
