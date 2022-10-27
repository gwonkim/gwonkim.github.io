---
title: "[BLOG] 게시글 렌더링"
excerpt: "markdown 파일 게시글로 렌더링하기"
coverImage: ""
date: "2022.09"
author:
  name: "김지원"
ogImage:
  url: ""
category: "js"
---

# 게시글 렌더링
- 마크다운 파일 렌더링

## 계획
- 따로 DB 구축하고 싶지 않음
- 파일 형태로만 저장 원함
- gitpage로 배포 예정

## 결정
- Markdown 사용
  - md 파일로 게시글 작성 후 md 파일 html로 렌더링

## markdown파일 불러오기
1. 지정 폴더(_posts)에서 파일 가져오기
2. md 파일 데이터 정리해서 객체 형태로 반환
3. markdown -> HTML(String)
4. html 렌더링

---

# 1. 지정 폴더의 파일 가져오기
- process.cwd() : Node.js 프로세스의 현재 작업 디렉터리를 반환
  - [자세히보기](https://nodejs.org/api/process.html#processcwd)
- readdirSync : 동기, 해당 디렉토리의 모든 파일 불러오기

## 적용 코드 : api.tsx
```js
import fs from 'fs';
import { join } from 'path';

export function getPostIds() {
  return fs.readdirSync(join(process.cwd(), '_posts'));
};

```

# 2. md 파일 정리 후 객체 변환
- md 파일을 찾기
- 찾은 파일 객체로 정리해 리턴(id, content...)
- 날짜별 정렬

## 적용 코드 : api.tsx
```js
export function getPostById(id: string, fields: string[] = []) {
  const realID = id.replace(/\.md$/, '');
  const fullPath = join(join(process.cwd(), '_posts'), `${realID}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  type Items = {
    [key: string]: string
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field === 'id') {
      items[field] = realID;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });
  return items;
};

export function getAllPosts(fields: string[] = []) {
  const ids = getPostIds(); // 
  const posts = ids.map((id) => getPostById(id, fields))  // 날짜별 정렬
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};
```

# 3. markdown -> HTML(String)
- md 파일의 내용 html로 변환
- 비동기로 마크다운 파일 html(String)로 변환
- next : getStaticProps 이용

## 적용 코드 : post/[id].tsx
```js

export async function getStaticProps({ params }: Params) {
    const post = getPostById(params.id, [
        'title',
        'date',
        'id',
        'content',
    ]);
    // 게시글의 내용 html로 변환
    const content = await markdownToHtml(post.content || ''); 

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
}
```
## 적용 코드 : markdownToHtml.tsx
```js
export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
```

# 4. html 렌더링
- dangerouslySetInnerHTML 이용
- innerHTML브라우저 DOM에서 사용하기 위한 React의 대체품.
- 일반적으로 코드에서 HTML을 설정하는 것은 실수로 사용자를 XSS(교차 사이트 스크립팅) 공격 에 노출시키기 쉽기 때문에 위험
- 따라서 React에서 직접 HTML을 설정할 수 있지만 위험하다는 것을 스스로에게 상기시키기 위해 키 dangerouslySetInnerHTML와 함께 객체를 입력하고 전달해야 함.

> 출처 : <https://reactjs.org/docs/dom-elements.html>


## 적용 코드

```js
import markdownStyles from "../markdown-styles.module.css";

type Props = {
  content: string,
};

const Test = ({ content }: Props) => {
  return (
    <div
      style={{ marginTop: "30px" }}
      className={markdownStyles["markdown"]}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default Test;
```

## 장점

- 추가 설치 필요 없음
- 간편한 코드로 html 렌더링

## 단점

- XSS(cross-site scripting)에 노출될 가능성 높음.
  - 따로 쿠키나 세션이 오가지 않고 사용자가 값을 입력할 일이 없어 단지 게시글을 보여주는 것이라서 사용.

## 렌더링 추가 방법(번외)

- html-react-parser 이용!
- npm i html-react-parser 설치

```js
import Parser from 'html-react-parser';

type Props = {
  content: string
}

const Test = ({ content }: Props) => {
  return (
    <div className={markdownStyle['markdown']}>
      {Parser(content)}
    </div>
  )
};

export default Test;

```
