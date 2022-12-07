---
title: "[에러] No validator could be found for constraint 'javax.validation.constraints.NotEmpty' validating type 'java.lang.Long'."
excerpt: "java | spring | error"
coverImage: ""
date: "2022.11.22"
author:
  name: "김지원"
ogImage:
  url: ""
category: "errer"
---

# 발생

- 사용자가 신청한 희망도서를 내용을 담을 model인 RequestBookRegistration 구현하면서 발생

## 오류 코드

```java

@NotEmpty(message = "ISBN를 입력하세요")
long isbn;

```

# 원인

- 잘못된 validation 태그 사용

# 해결

- 숫자 타입의 경우 @NotNull
- 문자열의 경우 @NotEmpty

## 해결 코드

```java

@NotNull(message = "ISBN를 입력하세요")
long isbn;

```
