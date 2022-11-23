---
title: "[에러] Neither BindingResult nor plain target object for bean name ' available as request attribute"
excerpt: "java | spring | error"
coverImage: ""
date: "2022.11"
author:
  name: "김지원"
ogImage:
  url: ""
category: "errer"
---

# 발생

- 해당 페이지 넘어가면 발생

# 원인

1. 파라미터 값 오타
2. 파라미터 명칭으로 인한 오류

## 2. 파라미터 명칭으로 인한 오류
- 파라미터 중 requestBookRegistration의 명칭이 너무 길어서 rBRegistration로 변경했는데 파라미터명 일치 문제로 bindingResult의 결과에 오류 발생

- \*\* 간소화로 인해 코드 중 일부 생략된 부분이 있을 수 있습니다.
## 오류 코드

```java
@PostMapping("request")
	public String userRequest(Model model, @Valid RequestBookRegistration rBRegistration, BindingResult bindingResult) {
		if (requestBookService.hasErrors(rBRegistration, bindingResult)) {
			return "user/request";
		}
		requestBookService.save(rBRegistration);
		return "user/request";
	}

```

# 해결

## 1. 파라미터 값 오타

- model.addAttribute() 및 jsp 등 전달된 값을 확인할 것

## 2. 파라미터 명칭으로 인한 오류

- 파라미터 명칭을 풀네임으로 그대로 적기

```java
@PostMapping("request")
	public String userRequest(Model model, @Valid RequestBookRegistration requestBookRegistration, BindingResult bindingResult) {
		if (requestBookService.hasErrors(requestBookRegistration, bindingResult)) {
			return "user/request";
		}
		requestBookService.save(requestBookRegistration);
		return "user/request";
	}

```
