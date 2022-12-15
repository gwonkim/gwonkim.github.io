---
title: "[에러] No property '하' found for type 'Book' Did you mean ''id'' with root cause"
excerpt: "java | spring | error"
coverImage: '/assets/blog/image/bookRe.jpg'
date: "2022.11.19"
author:
  name: "김지원"
ogImage:
  url: '/assets/blog/image/bookRe.jpg'
category: "errer"
---

# 발생

- 검색 기능 구현 중 검색 키워드로 '하'를 적은 후 리턴했을 때 발생

![bookRe_img](https://user-images.githubusercontent.com/62700252/203469121-4baab203-fae9-4175-89a3-59a7ceeb307b.jpg)

# 원인

- bookRepository의 query 형태 규칙 오류
- findByTitle로 명시할 경우 '하%'나 '%하%' 형태의 검색어를 포함하지 않고 '하' 형태로만 검색됨.

## 오류 코드

- \*\* 간소화로 인해 코드 중 일부 생략된 부분이 있을 수 있습니다.

```java
    Page<Book> findByTitle(String title, Pageable pageable);

    public default List<Book> findByTitle(Pagination pagination) {
        Page<Book> page = this.findByTitleContainingIgnoreCase(pagination.getKeyword() + "%", PageRequest
                .of(pagination.getPg() - 1, pagination.getSz(), Sort.Direction.ASC, "id"));
        pagination.setRecordCount((int) page.getTotalElements());
        return page.getContent();
    }

```

# 해결

- Containing와 IgnoreCase의 조건 붙이기

## 해결 코드

- containing : 해당 문자가 포함하는 것 찾기
- ignoreCase : 대소문자 구분 X

- \*\* 간소화로 인해 코드 중 일부 생략된 부분이 있을 수 있습니다.

```java
    Page<Book> findByTitleContainingIgnoreCase(String title, Pageable pageable);

    public default List<Book> findByTitleContainingIgnoreCase(Pagination pagination) {
        Page<Book> page = this.findByTitleContainingIgnoreCase(pagination.getKeyword(), PageRequest
                .of(pagination.getPg() - 1, pagination.getSz(), Sort.Direction.ASC, "id"));
        pagination.setRecordCount((int) page.getTotalElements());
        return page.getContent();
    }

```



# JPA Query 살펴보기

## 1. LIKE 쿼리를 수행하는 방법

```sql
SELECT \* FROM movie WHERE title LIKE '%in%';
```

## 2. Containing , Contains 및 IsContaining 사용하여 쿼리 메서드를 정의

- Contains vs Containing vs IsContaining : 키워드 간의 차이점 없음

```java

List<Movie> findByTitleContaining(String title);
List<Movie> findByTitleContains(String title);
List<Movie> findByTitleIsContaining(String title);

```

## 3. 쿼리 메서드 호출

```java

List<Movie> results = movieRepository.findByTitleContaining("in");
assertEquals(3, results.size());

results = movieRepository.findByTitleIsContaining("in");
assertEquals(3, results.size());

results = movieRepository.findByTitleContains("in");
assertEquals(3, results.size());

```

## 4. Like 키워드로 같은 기능 구현

- Spring은 또한 Like 키워드를 제공
- 단, 다른 점은 와일드카드 문자를 검색 매개변수와 함께 제공해야 함.

```java

List<Movie> findByTitleLike(String title);

```

```java

results = movieRepository.findByTitleLike("%in%");
assertEquals(3, results.size());

```



---

참고자료 : [jpa query](https://www.baeldung.com/spring-jpa-like-queries)
