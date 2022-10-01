---
title: '[JS] Function'
date: '2021'
author:
  name: '김지원'
---


# Function : 함수

## Allow Function
- allowFunction = () => {}
<pre>
let FunctionName = ( parameter ) => { 
    ...
}
</pre>

## Function
<pre>
Function functionName {
    ...
}
</pre>

## Allow Function VS Function
- setInterval(callback, 1000)의 callback 함수 작성 시 문제 발생!
    - Allow : this 문제 발생 X
        - 콜백함수로 전달, 호출 - 함수가 구현된 소스코드 문맥에서의 this
    - Function : this 문제 발생 O
        - 콜백함수로 전달, 호출 - 함수가 호출되는 문맥에서의 this

☞ 콜백함수로 전달되어 호출 시 각각의 함수가 뜻하는 this의 위치가 다름
