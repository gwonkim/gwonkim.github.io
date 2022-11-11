---
title: "[NUTEE] 설정 : 프로필 사진 변경"
excerpt: "성공회대학교 교내 커뮤니티 프로젝트"
coverImage: ""
date: ""
author:
  name: "김지원"
ogImage:
  url: ""
category: "js"
---

# 설정 기능 구현 - 프로필 사진 변경

- 사용자의 프로필 사진을 변경하는 기능

## 구현 모습

![home](https://user-images.githubusercontent.com/62700252/201092571-6f1376d0-9404-4ce3-bbc7-b46786cec48c.jpg)

## 구현 코드

- \*\* 간소화로 인해 코드 중 일부 생략된 부분이 있을 수 있습니다.

```js
const EditProfileImage = () => {
  const { me, profileImagePath } = useSelector(state => state.user);
  const imageInput = useRef();
  const [isImage, setIsImage] = useState(false);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const uploadProfileImage = useCallback(e => {
    setIsImage(true);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append("images", f);
    });
    dispatch({
      type: UPLOAD_PROFILE_IMAGE_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onChangeImages = useCallback(() => {
    if (isImage === false) {
      alert("이미지를 선택해주세요.");
      return false;
    }
    dispatch({
      type: EDIT_PROFILE_IMAGE_REQUEST,
      data: {
        profileUrl: profileImagePath[0],
      },
    });
    alert("프로필이 변경되었습니다.");
  }, [profileImagePath]);

  return (
    <div>
      <div>
        <Form encType="multipart/form-data" onClick={onClickImageUpload}>
          <input
            type="file"
            name="image"
            hidden
            ref={imageInput}
            onChange={uploadProfileImage}
          />
          {isImage ? (
            <img src={profileImagePath} alt={profileImagePath} />
          ) : (
            <img src={me.image.src} alt={me.image.src} />
          )}
        </Form>
      </div>
      <div>
        <Button onClick={onChangeImages} shape="round">
          확인
        </Button>
      </div>
    </div>
  );
};

export default EditProfileImage;
```

---

- [설정 기능 구현2 바로가기](./nutee_setting2)
- [설정 기능 구현3 바로가기](./nutee_setting3)
