---
title: "NUTEE : 게시글 기능 구현3"
excerpt: "성공회대학교 교내 커뮤니티 프로젝트"
coverImage: ""
date: "2020.5~2022.2"
author:
  name: "김지원"
ogImage:
  url: ""
category: "project"
---

# 게시글 기능 구현 - 게시글 해시태그 및 URL

## 구현 모습
![post11](https://user-images.githubusercontent.com/62700252/201036236-e791dfeb-fd85-43d9-a030-08a7d88380bf.jpg)

# 게시글 해시태그

- 게시글의 내용 중 해시태그가 있다면 링크로 반환하기

## 구현 코드 - 해시태그

```js
if (v.match(/(#[^\s]+)/)) {
  return (
    <Link href={`/hashtag/${v.slice(1)}`} prefetch={false} key={v}>
      <a>{v}</a>
    </Link>
  );
}
```

# 게시글 URL

- 게시글의 내용 중 URL이 있다면 링크로 반환하기

```js
if (u.match(/(http(s)?:\/\/([a-z0-9\w]+\.*)+[a-z0-9]{2,4})/)) {
  return (
    <Link href={u} prefetch={false} key={u}>
      <a target="_blank" rel="noreferrer">
        {u}
      </a>
    </Link>
  );
}
```

# 전체 구현 코드
- content : 게시글의 내용

```js
content.split(/(#[^\s]+)/g).map(v => {
  if (v.match(/(#[^\s]+)/)) {
    return (
      <Link href={`/hashtag/${v.slice(1)}`} prefetch={false} key={v}>
        <a>{v}</a>
      </Link>
    );
  }
  return v.split(/(\s)/gi).map(u => {
    if (u.match(/(http(s)?:\/\/([a-z0-9\w]+\.*)+[a-z0-9]{2,4})/)) {
      return (
        <Link href={u} prefetch={false} key={u}>
          <a target="_blank" rel="noreferrer">
            {u}
          </a>
        </Link>
      );
    }
    return u;
  });
});
```

---

- [게시글 기능 구현1 바로가기](./nutee_post1)
- [게시글 기능 구현2 바로가기](./nutee_post2)
