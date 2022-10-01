---
title: '[bash] SWAP'
coverImage: '/assets/blog/preview/box.jpg'
date: '2021'
author:
  name: '김지원'
ogImage:
  url: '/assets/blog/preview/box.jpg'
---


# SWAP
## 스왑
- 메모리 용랑 & 사용량 확인 명령
    - free -m
- 디스크 사용량 확인 명령
    - df

## 스왑 영역 만들기
- 스왑 영역 1G로 설정(1M*1024)
    - sudo dd if=/dev/zero of=/swapfile bs=1M count=1024
- 스왑 영역 2G로 설정(1M*2048)
    - sudo dd if=/dev/zero of=/swapfile bs=1M count=2048
- 스왑 파일의 권한 설정
    - 소유자만 읽고 쓸 수 있도록 권한 설정(root)
    - sudo chmod 600 /swapfile
- swapfile 파일을 스왑 영역 만들기
    - sudo mkswap /swapfile
- 스왑 작동
    - sudo swapon /swapfile
- 스왑 중지
    - sudo swapoff -v /swapfile
- 스왑 등록
    - sudo vi /etc/fstab
    - 기입 -> /swapfile  swap  swap  defaults  0  0
