---
title: "[에러] form 데이터가 넘어올 때 일부 데이터 소실"
excerpt: "java | spring | error"
coverImage: ""
date: "2022.10"
author:
  name: "김지원"
ogImage:
  url: ""
category: "errer"
---

# 발생

- 관리자 권한으로 사용자의 정보를 수정하는 기능을 구현할 때 form 데이터가 controller로 넘어오면서 일부 데이터 소실
- form 태그에 disabled=”true”을 명시한 데이터만 소실

# 원인

- disabled=”true”를 설정할 경우 그 데이터는 null값이 담긴 상태로 post됨.

```jsp

<div>
    <p>대출코드</p>
    <form:input path="borrowId" disabled="true" />
</div>

```

# 해결

- 관리자가 사용자의 정보를 마음대로 변환할 수 없으므로 정보는 보여지지만, 수정은 불가한 상태로 바꿔야 함.

## input 설정 readonly값 설정

- jsp의 경우 readonly=”readonly”가 아니라 readonly=”true”
- readonly와 disabled의 차이
  - form으로 값 전송 시 disabled는 값 전송 X, readonly는 값 전송 O

```jsp

<div>
    <p>대출코드</p>
    <form:input path="borrowId" readonly="true" />
</div>

```

## readonly의 css 형식을 disabled처럼 바꾸기

- readonly의 경우 일반 input과 같은 css 형식 유지

```css
.readonly,
.readonly:focus {
  outline: none;
  background: #f8f8f8;
  border: #d7d7d7 1px solid;
  color: #4c4d4f;
}

input[readonly] {
  outline: none;
  background: #f8f8f8;
  border: #d7d7d7 1px solid;
  color: #4c4d4f;
}
```
