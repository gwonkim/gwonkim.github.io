---

title: String Method
date: 2021

---
# String Method

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
