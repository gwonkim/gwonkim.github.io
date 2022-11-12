---
title: "[NUTEE] 검색 : 네비케이션바"
excerpt: "성공회대학교 교내 커뮤니티 프로젝트"
coverImage: ""
date: ""
author:
  name: "김지원"
ogImage:
  url: ""
category: "js"
---

# 검색 기능 구현1

- 기존 네비게이션바에 검색 기능을 추가

# 검색 네이비게이션바 구현 - 접힌 모습

- 네이비게이션바에서 평소에는 돋보기 모양 아이콘 형태로 있고 클릭 시 검색창이 나오도록 구현
- - <SearchOutlined />는 돋보기 모양 아이콘

## 구현 모습

![Navbar](https://user-images.githubusercontent.com/62700252/200836226-58d23705-f603-4771-9dc0-83f440f9f64b.png)

## 구현 코드 - NavigationBar.js
- \*\* 간소화로 인해 코드 중 일부 생략된 부분이 있을 수 있습니다.
```js
const NavigationBar = ({ me }) => {
  const [showSearch, setShowSearch] = useState(false);
  const onOpenSearch = useCallback(() => {
    setShowSearch(true);
  }, []);
  const onCloseSearch = useCallback(() => {
    setShowSearch(false);
  }, []);

  ...

  return (
    <>
      ...

      { showSearch ?
        <Search onCloseSearch={onCloseSearch} /> :
        <SearchOutlined onClick={onOpenSearch} />}

      ...

    </>
  )
};

...

export default NavigationBar;;
```

# 검색 네이비게이션바 구현 - 펼친 모습

- 검색어를 입력할 검색 창
- 게시글 카테고리 : 게시글의 카데코리를 선택해 검색 가능
- 검색 기록 : 이전 검색 기록 배치

## 구현 모습

![search](https://user-images.githubusercontent.com/62700252/200836444-4c5053b2-3526-4064-8ec5-df72d682d779.png)

## 구현 코드 - Search.js
- \*\* 간소화로 인해 코드 중 일부 생략된 부분이 있을 수 있습니다.
```js
const Search = ({ onCloseSearch }) => {

  ...

  return (
  /* 검색 아이콘을 눌렀을 때 보이는 페이지 */
    <>
      <CloseOutlined onClick={onCloseSearch} />  {/* 돋보기 아이콘 */}
      {/* 검색바 */}
      <SearchBar onAddKeyword={onAddKeyword} />
      <div>
          <p>카테고리 목록</p>
          {categoryData.map((tag) => (
            <Link href={`/search/${tag}`} prefetch={false} key={tag}>
              <a>
                <Button
                  key={tag}
                  onClick={() => onTag(tag)}
                >
                  {tag}
                </Button>
              </a>
            </Link>
          ))}
          {/* 검색 기록 */}
            <SearchHistory
              keywords={keywords}
              onClearKeywords={onClearKeywords}
              onRemoveKeyword={onRemoveKeyword}
            />
      </div>
    </>
  );

};

...

export default Search;

```

---

- [검색 기능 구현2 바로가기](./nutee_search2)
- [검색 기능 구현3 바로가기](./nutee_search3)
