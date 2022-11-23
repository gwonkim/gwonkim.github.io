---
title: "[에러] Caused by: java.lang.IllegalArgumentException: Property must not be null or empty"
excerpt: "java | spring | error"
coverImage: '/assets/blog/image/empty.jpg'
date: "2022.11.18"
author:
  name: "김지원"
ogImage:
  url: '/assets/blog/image/empty.jpg'
category: "errer"
---

# 발생

- 검색 기능을 위해 BookRepository 수정 중

![화면 캡처 2022-11-19 004741](https://user-images.githubusercontent.com/62700252/203464960-f29f3a06-f891-402f-b437-696cf1836e01.jpg)

# 원인

- \*\* 간소화로 인해 코드 중 일부 생략된 부분이 있을 수 있습니다.

## 오류 코드

```java
public default List<Book> findAll(Pagination pagination) {
         Page<Book> page = this.findAll(PageRequest.of(pagination.getPg() - 1, pagination.getSz(), Sort.Direction.ASC, "id", pagination.getSrchText()));
        pagination.setRecordCount((int)page.getTotalElements());
        return page.getContent();
    }

```

# 해결

- page에 pagination.getSrchText()의 값을 넘기면 안 됨
- 이때 PageRequest.of에 해당하는 파라미터는 pageable이기 때문에 srchText는 필요없음.

- \*\* 간소화로 인해 코드 중 일부 생략된 부분이 있을 수 있습니다.

## 해결 코드 - BookRepository 오류

```java
public default List<Book> findAll(Pagination pagination) {
        Page<Book> page = this.findAll(PageRequest.of(pagination.getPg() - 1, pagination.getSz(),
                                                   Sort.Direction.ASC, "id"));
        pagination.setRecordCount((int)page.getTotalElements());
        return page.getContent();
    }

```

## 해결 코드 - search.jsp 오류

```jsp

<form:input path="srchText" />
<-- 아래의 name값을 path로 수정해야 함. -->
<form:input type="text" name="srchText" placeholder="검색조건" /> <-- X -->
<form:input type="text" path="srchText" placeholder="검색조건" /> <-- O -->

```
