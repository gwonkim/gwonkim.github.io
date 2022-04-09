---
title : hoisting
date : 2021
---

# Hoistiong

- 사전적 정의 : Hoisting - 끌어올리기
- 끌어 올려지는 변수
- var 키워드로 선언된 변수는 호이스트  
- 변수의 정의가 그 범위(스코프)에 따라 선언과 할당으로 분리되는 것
- 한 함수에서 변수는 선언하지 않고 호출하고 이후에 변수 선언과 정의를 할 경우 아래에 정의된 변수를 호이스트해 이전에 호출한 변수는 undefined가 발생하고 넘어감.

-> 예시 코드 : hello1();
<pre>
function hello1() {
console.log(a); // undefined
var a = 'hello';
console.log(a); // hello
};
</pre>

함수도 마찬가지로 끌어올림.
단, 함수 호이스팅의 경우 함수를 끌어올리지만 변수의 값은 끌어올리지 않음.
(변수에 함수가 담겨있는 경우 포함)

-> 예시 코드 : hello2();
<pre>
hello2();  // hello2
function hello2() {
console.log('hello2');
};
</pre>

아래의 예시(hello3)는 함수 리터럴을 할당하는 구조, 호이스팅 X, 런타임 환경에서 타입 에러 발생
<pre>
hello3();  // console > Uncaught TypeError: hello3 is not a function
var hello3 = function() {
console.log(hello3);
};
</pre>
