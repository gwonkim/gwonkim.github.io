---
title: "[NUTEE] 검색 : 검색 창 및 검색 기록"
excerpt: "성공회대학교 교내 커뮤니티 프로젝트"
coverImage: ""
date: ""
author:
  name: "김지원"
ogImage:
  url: ""
category: "js"
---

# 검색 기능 구현2
## 검색창 & 검색 기록
- 네비게이션바 검색 기능의 검색창과 검색 기록
- 길어진 코드로 가독성을 높이기 위해서 컴포넌트 분리!

# 검색창

## 구현 모습
![searchInput](https://user-images.githubusercontent.com/62700252/200841242-38ca8323-5120-4f15-9586-923bdac4f70f.jpg)

## 구현 코드 - searchBar.js
- \*\* 간소화로 인해 코드 중 일부 생략된 부분이 있을 수 있습니다.
```js
onst SearchBar = ({ onAddKeyword }) => {
  const [keyword, onChangeKeyword] = useInput('');

  const onSearch = useCallback(() => {
    if (keyword.length <= 0 || keyword.trim() === '') {
      return alert('검색어를 입력하십시오.');
    }
    Router.push(`/search/${keyword}`);
    onAddKeyword(keyword);
    return true;
  }, [keyword]);

  const onEnter = useCallback((e) => {
    if (e.key === 'Enter') {
      const key = e.target.value;
      if (key.length <= 0 || key.trim() === '') {
        return alert('검색어를 입력하십시오.');
      }
      Router.push(`/search/${key}`);
      onAddKeyword(key);
    }
    return true;
  }, []);

  ...

  return (
    <div>
      <Input
        placeholder="검색어를 입력하세요."
        allowClear
        value={keyword}
        onChange={onChangeKeyword}
        onKeyPress={onEnter}
      />
      <SearchOutlined onClick={onSearch} />
    </div>
  );
};

export default SearchBar;

```

# 검색 기록 저장
- 서버에서 검색 기록을 넘겨주는 방식말고 각 기기마다 별도로 저장해 보여주기로 결정
- keywords(검색한 키워드들)의 값을 넘겨 받아 키워드가 존재할 경우 검색 기록 표시

- 저장 방법 : localStorage
  - localStorage VS sessionStorage
    - 이 둘을 사용하면 페이지를 새로 고침하고(sessionStorage의 경우)
    - 심지어 브라우저를 다시 실행해도(localStorage의 경우) 데이터가 사라지지 않고 존재

## 구현 모습1
- 검색 기록 저장

![searchHistory](https://user-images.githubusercontent.com/62700252/200841253-22fa263e-efb3-4358-a17d-03df83638e1a.jpg)

## 구현 모습2
- 검색 기록 저장 및 삭제

![searchHistory2](https://user-images.githubusercontent.com/62700252/200842476-644f453c-c4cc-4a9c-b7d6-d02a71f05a94.jpg)


## 구현 코드1 - 검색 기록 저장 및 삭제
- \*\* 간소화로 인해 코드 중 일부 생략된 부분이 있을 수 있습니다.
```js
const getKetwords = JSON.parse(localStorage.getItem("keywords")); // 검색 기록 가져오기
const [keywords, setKeywords] = useState(getKetwords || []); // 1. 가져온 검색 기록 state로 저장

// 3. keywords(검색기록)가 변경될 때마다 localStorage에 저장
useEffect(() => {
  localStorage.setItem("keywords", JSON.stringify(keywords));
}, [keywords]);

// 2. 검색을 하였을 경우 새로운 키워드를 keywords에 저장
const onAddKeyword = useCallback(text => {
  const newKeyword = {
    id: Date.now(),
    text,
  };
  setKeywords([newKeyword, ...keywords]);
}, []);

// 검색 기록 일부 삭제
const onRemoveKeyword = useCallback(id => {
  const index = keywords.findIndex(thisKeyword => thisKeyword.id === id);
  setKeywords(keywords.filter(thisKeyword => thisKeyword.id !== id));
  keywords.splice(index, 1);
}, []);

// 검색 기록 전부 삭제
const onClearKeywords = useCallback(() => {
  setKeywords([]);
  localStorage.removeItem("keywords");
}, []);
```

## 구현 코드2 - 검색 기록 표시

```js
const history = (
    <>
      {keywords.length === 0 || keywords === null
        ? (
          <div>
            <p>최근 검색된 기록이 없습니다.</p>
          </div>
        )
        : (
          <>
            {keywords.map(({ id, text }) => (
              <div key={id}>
                  <Link href={`/search/${text}`} prefetch={false} key={text}>
                    <a>
                      <pre key={id} onClick={() => onTag(text)}>{text}</pre>
                    </a>
                  </Link>
                  <p
                    key={id}
                    onClick={() => onRemoveKeyword(id)}
                  >
                    <CloseOutlined /> {/* X표시 아이콘 */}
                  </p>
              </div>
            ))}
          </>
        )}
    </>
);

```

------
- [검색 기능 구현1 바로가기](./nutee_search1)
- [검색 기능 구현3 바로가기](./nutee_search3)
