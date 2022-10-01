---
title: '[에러] Http error'
coverImage: '/assets/blog/preview/box.jpg'
date: '2020'
author:
  name: '김지원'
ogImage:
  url: '/assets/blog/preview/box.jpg'
---



#  Http Error
> api 연결할 때 발생한 에러 로그

## HTTP code 405
> 발생
- 405 Method Not Allowed

> 원인
- 잘못 된 메소드 사용 시 발생
            
- 서버에서 허용하지 않은 메소드를 사용했거나
- get을 post 했거나 post를 get하였을 때 발생한 문제(get -> post or post -> get)
   
> 해결
- post를 get으로 수정(*내 경우)

## HTTP code 415


> 발생
![415](https://user-images.githubusercontent.com/62700252/161536195-6615689d-c67e-455c-b385-2039c69392e6.png)
- 415 Unsupported Media Type
- 지원하지 않는 미디어 포맷 

> 원인
- 서버로 보내는 데이터에 대해서 일어나는 문제
- (서버에서 원하는 데이터가 안 보내지거나 데이터 타입이 잘못된 경우 등에서 발생)
            
            
> 해결
- Header값을 채워서 보내기
    - Content-Type : 데이터의 타입을 나타내는 값 ex) application/json
    - Accept : 클라이언트가 선호하는 미디어 타입 값 
            
- get일 때 헤더를 채워도 계속적으로 415 에러가 나타난다면(*내 경우)
    - {} 빈 객체를 보내볼 것 
    - body가 null일 경우 415가 뜰 수도 있음. 
    - 가끔 data가 없어서 에러가 생기는 경우가 있음.


