---
title: '[JS] String'
coverImage: '/assets/blog/preview/box.jpg'
date: '2021'
author:
  name: '김지원'
ogImage:
  url: '/assets/blog/preview/box.jpg'
---

# String Method

## string : 문자열
> 자바스크립트에서의 문자열은 기본 자료형.
> 자바에서는 복합 자료형이지만 자바스크립트의 문자열은 기본 자료형이기 때문에 주의헤야 한다.


## 불변성 문자열(Immutable String)
* 원형을 변형할 수 없음. 원본 유지!
* 복사되어서 변형된다는 점을 유의!
* 리턴 값이 false일 경우 -1 리턴

- indexOf()
- lastIndex()
- search()
- match()
- slice()
- subString()
- subStr()
- replace()
- toLowerCase()
- toUpperCase()
- concat() : 이어 붙이기
- trim() 자르기
- charAt()
- charCodeAt()
- split()
- padEnd(targetLength, string) padStart(targetLength, string)

## substr과 substring
### 문자열.substr(start, length);
- 음수 사용 가능
- length 생략 가능
- start+length 위치까지 

### 문자열.substring(start, end);
- 음수 사용 불가(음수 = 0)
- end 생략 가능
- 0부터 길이 생각 시 start에서 end 앞까지
