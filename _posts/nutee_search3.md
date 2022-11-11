---
title : '[NUTEE] 검색 : 스크롤 시 검색 데이터 요청'
excerpt: '성공회대학교 교내 커뮤니티 프로젝트'
coverImage: ''
date: ''
author:
  name: '김지원'
ogImage:
  url: ''
category: 'js'
---

# 검색 기능 구현3 - 스크롤 시 검색 데이터 요청
## 스크롤 시 추가로 검색 데이터 더 불러오기
+ 사용자가 스크롤을 하였을 때 추가 포스트가 있다면 검색 데이터 더 불어오게 설정

## 화면 사이즈
- window.pageYOffset : 현재 문서가 수직으로 얼마나 스크롤 됐는지 픽셀 단위로 반환
  - scrollY의 다른 이름, pageYOffset와 차이점은 scrollY의 경우만 IE에서 작동했었음.

- clientHeight : 내부 높이, 사용자의 눈에 보이는 콘텐츠와 padding값을 포함한 높이
  - padding 값 포함 + scrollbar, border, margin 값 제외
- scrollHeight : 현재 스크롤을 한 전체 콘텐츠의 높이
  - padding, border 값 포함 + margin 값 제외

* 추가 : offsetHeight - 눈에 보이는 콘텐츠와 padding, border, scrollbar 값을 포함한 높이
* 크기 정리 : client < offset < scroll

## 정리
* 현재 스크롤 길이(pageOffset) + 사용자의 화면 높이(clientHeight) > 현재 스크롤한 전체 콘텐츠 높이(scrollHeight) - 300
* 위 공식 중 scrollHeight의 값에서 300을 뺀 이유는 다 내려가기 전에 검색 데이터를 불러오기 위해서!

## 구현 코드
- \*\* 간소화로 인해 코드 중 일부 생략된 부분이 있을 수 있습니다.
```js
 useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset + document.documentElement.clientHeight
        > document.documentElement.scrollHeight - 300) {
        if (hasMorePost) {
          dispatch({
            type: LOAD_SEARCH_POSTS_REQUEST,
            lastId: searchPosts[searchPosts.length - 1] && searchPosts[searchPosts.length - 1].id,
            data: text,
          });
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [searchPosts.length, hasMorePost]);

```

------
- [검색 기능 구현1 바로가기](./nutee_search1)
- [검색 기능 구현2 바로가기](./nutee_search2)
