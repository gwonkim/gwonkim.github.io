---
title: "[PROJECT] BLOG(버전1)"
excerpt: "개인 블로그 개발 프로젝트"
coverImage: ""
date: "2021.07~2022.08"
author:
  name: "김지원"
ogImage:
  url: ""
category: "project"
---

# PROJECT : Blog(ver.1)
- gitpage를 활용하여 블로그 제작

# 사용기술
- html
- scss
- Typescript
- Next.js
- React.js

# 게시글
- 각 게시글마다 html 파일로 작성해 배포

## 배포 모습
![page+view](https://user-images.githubusercontent.com/62700252/196025765-1637c8bb-a9a2-4445-bb1e-831db132362d.gif)


# 툴팁 생성
- 링크 특징인 파랑색의 밑줄이 그어진 모습이 없애 링크와 일반글이 구분 불가
- 툴팁을 생성해 구분

## 적용 모습
![tooltip](https://user-images.githubusercontent.com/62700252/196025766-34ee206c-c259-483d-b62b-29d021ec6f82.gif)


## 적용 코드 : html
```html
<div class="tooltip">
  ☞ <a href="/">Link</a>
  <span class="tooltipText">클릭하면 페이지로 넘어갑니다.</span>
</div>
```

## 적용 코드 : css
```css
/* tooltip */
.tooltip {
  position: relative;
  display: block;
}

.tooltip .tooltipText {
  visibility: hidden;
  font-size: 20px;
  width: 17em;
  background-color: rgba(202, 169, 52, 0.8);
  color: #292826;
  text-align: center;
  border-radius: 6px;
  margin: 50px 0 0 -70px;
  padding: 5px 5px;
  font-weight: bold;
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltipText {
  visibility: visible;
}
```
