---
title: "[NUTEE] 게시글 : 게시글 보기 및 스크롤"
excerpt: "성공회대학교 교내 커뮤니티 프로젝트"
coverImage: ""
date: "2020.5~2022.2"
author:
  name: "김지원"
ogImage:
  url: ""
category: "js"
---

# 게시글 기능 구현 - 게시글 보기 및 게시글 스크롤
## TAB 형태

- 게시글이 전체/즐겨찾기/전공 게시글로 되어 있어 별도의 페이지 형태보다는 탭 형식으로 보기 편하게 제작
- 언제든지 작성할 수 있도록 각 게시글 탭 상단에 게시글 작성 블럭 고정

## 전체 구현 모습

![게시글1](https://user-images.githubusercontent.com/62700252/201036477-9dee4a16-8029-4e27-9402-be4fff0af861.png)


## 구현 코드1 - index.js 게시글 전체
- \*\* 간소화로 인해 코드 중 일부 생략된 부분이 있을 수 있습니다.
```js
// 게시글
<MainContents
  target={me}
  hasMorePost={hasMorePost}
  mainPosts={mainPosts}
  favoritePosts={favoritePosts}
  majorPosts={majorPosts}
/>
```

## 구현 코드2 - mainContents.js
- \*\* 간소화로 인해 코드 중 일부 생략된 부분이 있을 수 있습니다.
```js

const MainContents = ({ 
  target, 
  mainPosts, 
  hasMorePost, 
  favoritePosts, 
  majorPosts, 
  userPosts 
  }) => {

  ...

  return (
          <Tabs defaultActiveKey="2" style={tabsWrapper}>
            <TabPane tab="즐겨찾기" key="1" style={tabPaneWrapper}>
              {!target || me.id === target.id ? <PostForm me={me} /> : <></>}
              {favoritePosts.map((f) => (
                <PostCard key={f.id} post={f} /> // 게시글 작성 컴포넌트와 게시글 리턴
              ))}
            </TabPane>
            <TabPane tab="전체 게시글" key="2" style={tabPaneWrapper}>
              {!target || me.id === target.id ? <PostForm me={me} /> : <></>}
              {mainPosts.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </TabPane>
            <TabPane tab="전공" key="3" style={tabPaneWrapper}>
              {!target || me.id === target.id ? <PostForm me={me} /> : <></>}
              {majorPosts.map((c) => (
                <PostCard key={c.id} post={c} />
              ))}
            </TabPane>
          </Tabs>
  );
};

...

export default MainContents;

```

----------

# 스크롤
## 스크롤할 때 게시글 데이터가 더 있다면 다음 게시글 데이터 요청

- 스크롤을 감지한 후 추가로 게시글(hasMorePost)이 존재하고 게시글을 불러오지 않을 때(loadPostsLoading) 서버에 이후 게시글 요청
- 검색 기능 구현 방식과 동일한 방법으로 구현 : [검색 기능 구현3 바로가기](./nutee_search3)

## 구현 코드 
- \*\* 간소화로 인해 코드 중 일부 생략된 부분이 있을 수 있습니다.
```js
useEffect(() => {
  function onScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 300
    ) {
      if (hasMorePost && !loadPostsLoading) {
        const lastId = mainPosts[mainPosts.length - 1]?.id;
        dispatch({
          type: LOAD_POSTS_REQUEST,
          lastId,
        });
        dispatch({
          type: LOAD_FAVORITE_POSTS_REQUEST,
          lastId,
        });
        dispatch({
          type: LOAD_MAJOR_POSTS_REQUEST,
          lastId,
        });
      }
    }
  }
  window.addEventListener("scroll", onScroll);
  return () => {
    window.removeEventListener("scroll", onScroll);
  };
}, [mainPosts.length, hasMorePost, !loadPostsLoading]);
```

----------

- [게시글 기능 구현1 바로가기](./nutee_post1)
- [게시글 기능 구현2 바로가기](./nutee_post2)