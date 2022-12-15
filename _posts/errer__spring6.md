---
title: "[에러] Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails"
excerpt: "java | spring | DB(mySql) | error"
coverImage: "/assets/blog/image/dbFK.jpg"
date: "2022.11.21"
author:
  name: "김지원"
ogImage:
  url: "/assets/blog/image/dbFK.jpg"
category: "errer"
---

# 발생

- DB에 foreign key 설정 실패
- workbench에서 references 값 안 나옴
- 명령어로 작성해도 실패
- \*mySql 사용

- (library.#sql-18dc_2646, CONSTRAINT FK_borrow_users FOREIGN KEY (userId) REFERENCES user (id))

![dbFK](https://user-images.githubusercontent.com/62700252/203469731-b5a807d9-0538-4831-83fd-b1c9fe6a128c.jpg)

# 원인

- 해당 테이블의 FOREIGN KEY로 설정할 userId의 값이 비워있어서 오류 발생

# 해결

- 1. 현재 생성된 테이블에 값을 채움
- 2. 명령어로 아래 작성 후 실행

## SQL : foreign key 설정 명령어

```sql
ALTER TABLE 해당테이블
ADD CONSTRAINT 설정이름
FOREIGN KEY (설정할값)
REFERENCES 참고테이블 (참고값);

```

```sql
ALTER TABLE library.bookborrow
ADD CONSTRAINT FK_borrow_user
FOREIGN KEY (userId)
REFERENCES library.user (id);

```
