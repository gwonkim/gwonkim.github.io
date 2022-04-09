---
title: Merge
date: 2021
---

# GIT : Merge</h1>
## Merge
- remote repository와 local repository의 동일하지 않을 때 합치기 위해 발생(병합)
- 동일한 코드를 수정 X -> pull했을 때 자동으로 병합
- 동일한 코드를 수정 O -> 자동 병합이 되지 않아 Merge Conflict가 발생함.

## Merge Conflict
- pull 명령 실행 시 발생 가능
- *Pull = fetch(다운로드) + Merge(병합)

- 아직 push되지 않은 commit이 나의 local repository에 있다면,
- commit과 다운로드(fetch)된 최신 commit이 자동 합쳐져야 하는데(Merge)
- 내가 commit한 것과 다운받은 commit이 동일한 코드를 수정한 경우 Merge Conflict가 발생함.
    - => Merge Conflict가 발생 시 수동으로 Merge해야 함.
