---
title: '[에러] Http Status 405'
coverImage: ''
date: '2020'
author:
  name: '김지원'
ogImage:
  url: ''
category: 'error'
---



# 발생
- 405 Method Not Allowed

# 원인
- 잘못 된 메소드 사용 시 발생
            
- 서버에서 허용하지 않은 메소드를 사용했거나
- get을 post 했거나 post를 get하였을 때 발생한 문제(get -> post or post -> get)
   
# 해결
- post를 get으로 수정(*내 경우)
