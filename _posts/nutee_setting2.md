---
title: "[NUTEE] 설정 : 닉네임 및 비밀번호 변경"
excerpt: "성공회대학교 교내 커뮤니티 프로젝트"
coverImage: ""
date: ""
author:
  name: "김지원"
ogImage:
  url: ""
category: "js"
---

# 설정 기능 구현 - 닉네임 변경

## 구현 모습

![nickname](https://user-images.githubusercontent.com/62700252/201089818-832bf7da-c6d2-40d4-94c5-a931f4534852.jpg)

## 구현 코드

- \*\* 간소화로 인해 코드 중 일부 생략된 부분이 있을 수 있습니다.

```js
const EditNickname = () => {
  const [editNickname, onChangeEditNickname, setEditNickname] = useInput("");
  const { editNicknameDone } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editNicknameDone) alert("닉네임이 변경되었습니다.");
  }, [editNicknameDone]);

  const onEditNickname = useCallback(
    async e => {
      e.preventDefault();
      if (editNickname.length > 12) alert("최대 12자까지 가능합니다.");
      await dispatch({
        type: EDIT_NICKNAME_REQUEST,
        data: { nickname: editNickname },
      });
      setEditNickname("");
    },
    [editNickname]
  );

  return (
    <div>
      <Row>
        <Input
          prefix={<UserOutlined />}
          name="user-nickname"
          placeholder="변경할 닉네임을 입력해주세요."
          value={editNickname}
          onChange={onChangeEditNickname}
          required
        />
        <Button onClick={onEditNickname}>확인</Button>
        <p>
          닉네임은 <b>최대 12자</b>까지 가능합니다.
        </p>
      </Row>
    </div>
  );
};

export default EditNickname;
```

# 설정 기능 구현 - 비밀번호 변경

- 기존 비밀번호를 확인 후 비밀번호 변경

## 구현 모습

![password](https://user-images.githubusercontent.com/62700252/201089802-ba1591f0-19c0-45e5-8207-bdb5c8962ab7.jpg)

## 구현 코드

- \*\* 간소화로 인해 코드 중 일부 생략된 부분이 있을 수 있습니다.

```js

const EditPassword = () => {
  const [nowPassword, onNowPassword] = useInput('');
  const [changePassword, onchangePassword] = useInput('');
  const dispatch = useDispatch();

  const onEditPassword = useCallback(
    async (e) => {
      e.preventDefault();
      await dispatch({
        type: EDIT_PASSWORD_REQUEST,
        data: { nowPassword, changePassword },
      });
    }, [changePassword],
  );

  return (
    <>
      <div>
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="현재 비밀번호"
          name="user-password"
          value={nowPassword}
          onChange={onNowPassword}
          required
        />
      </div>
      <div>
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="변경할 비밀번호"
          name="user-password2"
          value={changePassword}
          onChange={onchangePassword}
          required
        />
      </div>
      <div>
        <Button type="round" onClick={onEditPassword}>
          변경
        </Button>
      </div>
    </>
  );
};
export default EditPassword;

------
- [설정 기능 구현1 바로가기](./nutee_setting1)
- [설정 기능 구현3 바로가기](./nutee_setting3)
```
