---
title: "[에러] Failed to convert property value of type java.lang.String to required type long for property isbn;"
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

- form태그에서 isbn의 input 값이 그냥 빈칸으로 넘어갈 때 발생
- (nested exception is java.lang.NumberFormatException: For input string: "")

# 원인

- int형 데이터에 ''형태가 들어와 파싱이 안되어서 에러 발생.
- controller 전에 오류가 발생해서 form에서 오류를 수정해야 함.

# 해결

- disabled를 설정해 빈칸으로 넘길 수 없게 수정

## 해결 코드

```jsp

      <div>
        <p>ISBN</p>
        <form:input path="isbn" required="true" />
        <form:errors path="isbn" class="error" />
      </div>

```
