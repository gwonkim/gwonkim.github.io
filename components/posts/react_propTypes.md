---
title: PropTypes
date: 2021
---

# prop-types
## 리액트에서 prop-types 사용하는 법

> react hooks에서 사용하는 법
### propTypes 설정 방법
Test.js
```javascript
import PropTypes from 'prop-types'; // import prop-types 

const Test = ({ a }) => {
    ...
};

Test.propTypes = {
    a: PropTypes.object, // 전달될 a의 타입은 object이다.
};
```

### prop-types의 타입 종류
- optionalArray: PropTypes.array 배열
- optionalBool: PropTypes.bool 불값
- optionalFunc: PropTypes.func 함수
- optionalNumber: PropTypes.number 숫자
- optionalObject: PropTypes.object 객체
- optionalString: PropTypes.string 문자열
- optionalSymbol: PropTypes.symbol 심볼
- optionalAny: PropTypes.any 모든 데이터 타입 가능

### props의 초기값 정의
```javascript
a.defaultProps = {
    name: 'jiwon'
};
```

### props의 필수사항 설정
> *설정한 값이 전달되지 않았을 때 콘솔에서 경고 뜸.

>> 방법 1 (일부만 필수인 경우)
```javascript
a.propTypes = {
    a: PropTypes.object.isRequired,
    b: PropTypes.array,
};
```

>> 방법2 (여러 개가 필수인 경우)

```javascript
a.propTypes = {
    a: PropTypes.object,
    b: PropTypes.array,
}.isRequired;
```

### props 특정 설정(객체 등)
- (객체의 각각의 내부 값 타입 설정)
```javascript
aObject: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
}), 
```

- 특정 값을 갖는 배열
```javascript
aArrayOf: PropTypes.arrayOf(PropTypes.number),
```

- 특정 값을 갖는 객체
```javascript
aObjectOf: PropTypes.objectOf(PropTypes.number),
```

### 참고 사이트
- [react공식 사이트 : prop-types](https://ko.reactjs.org/docs/typechecking-with-proptypes.html)
