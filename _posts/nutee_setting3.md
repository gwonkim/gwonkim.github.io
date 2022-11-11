---
title: "[NUTEE] 설정 : 카테고리 및 전공 변경"
excerpt: "성공회대학교 교내 커뮤니티 프로젝트"
coverImage: ""
date: ""
author:
  name: "김지원"
ogImage:
  url: ""
category: "js"
---

# 설정 기능 구현 - 카테고리 변경

- 자신이 좋아하는 항목의 카테고리를 설정하면 이에 해당하는 게시물을 열람 가능.
- 카테고리를 변경하는 기능 추가

## 구현 모습

![category](https://user-images.githubusercontent.com/62700252/201089808-e880eb14-e709-41e3-af6d-8a689f27696e.jpg)

## 구현 코드

- \*\* 간소화로 인해 코드 중 일부 생략된 부분이 있을 수 있습니다.

```js

const EditCategory = () => {
  const [interests, setInterests] = useState([]);

  ...

  useEffect(() => {
    if (editCategoryDone) alert('카테고리가 변경되었습니다.');
  }, [editCategoryDone]);

  const onEditCategory = useCallback(() => {
    dispatch({
      type: EDIT_CATEGORY_REQUEST,
      data: { interests },
    });
    setInterests(null);
  }, [interests]);

  return (
    <div>
      <Select
        isMulti
        placeholder="선호하는 카테고리를 선택해주세요."
        name="user-interests"
        onChange={onSelectInterests}
        options={selectOptions(categoryData)}
      />
      <Button onClick={onEditCategory}>확인</Button>
    </div>
  );
};

export default EditCategory;


```

# 설정 기능 구현 - 전공 변경

- 학교 특성 상 2학년 2학기부터 전공이 시작되어 학부생에서 전공생으로 변경됨.
- 그렇기 때문에 전공 변경 기능을 추가
- 단, 다른 전공 게시물을 보기 위해 임시로 계속 변경할 우려를 생각해 서버 쪽에서 어느정도 기간을 두고 변경할 수 있도록 설정

## 구현 모습

![major](https://user-images.githubusercontent.com/62700252/201089816-c201b9e2-4ed4-41cb-87c5-955040ccbeb6.jpg)

## 구현 코드

- \*\* 간소화로 인해 코드 중 일부 생략된 부분이 있을 수 있습니다.

```js

const EditCategory = () => {
  const [major, setMajor] = useState([]);

  ...

  const onEditMajor = useCallback(() => {
    dispatch({
      type: EDIT_MAJOR_REQUEST,
      data: { majors: major },
    });
  }, [major]);

  ...

  return (
    <div>
      <Select
        isMulti
        placeholder="학부 또는 전공을 선택해주세요."
        name="user-interests"
        onChange={onSelectMajors}
        options={selectOptions(majorsData)}
      />
      <Button onClick={onEditMajor}>확인</Button>
    </div>
  );
};

export default EditCategory

```

---

- [설정 기능 구현1 바로가기](./nutee_setting1)
- [설정 기능 구현2 바로가기](./nutee_setting2)
