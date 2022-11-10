---
title: "NUTEE : 게시글 기능 구현2"
excerpt: "성공회대학교 교내 커뮤니티 프로젝트"
coverImage: ""
date: "2020.5~2022.2"
author:
  name: "김지원"
ogImage:
  url: ""
category: "project"
---

# 게시글 기능 구현 - 게시글 작성
- 게시글의 제목과 내용 그리고 카테고리 및 이미지 삽입 가능

## 구현 모습
![post5](https://user-images.githubusercontent.com/62700252/201026017-65c8d07a-1d9d-4da0-92a2-011c76d41705.png)


## 구현 코드 - postForm.js
```js
const PostForm = () => {
  const dispatch = useDispatch();
  const [title, onChangeTitle, setTitle] = useInput(''); // 게시글 제목
  const [text, onChangeText, setText] = useInput(''); // 게시글 내용
  const [category, setCategory] = useState(); // 게시글 카테고리
  const imageInput = useRef(); // 게시글 이미지 첨부

  ...

  // 게시글 전송
  const onSubmitForm = useCallback(() => {
    if (!category) return alert('카테고리를 선택해주세요.');
    if (!title || !title.trim()) return alert('제목을 작성해주세요.');
    if (!text || !text.trim()) return alert('게시글을 작성해주세요.');
    return (
      dispatch({
        type: ADD_POST_REQUEST,
        data: {
          title,
          content: text,
          images: imagePaths,
          category,
        },
      })
    );
  }, [title, text, imagePaths, category]);

  // 이미지 변경
  const onChangeImages = useCallback((e) => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('images', f);
    });
    dispatch({
      type: UPLOAD_REQUEST,
      data: imageFormData,
    });
  }, []);

  // 이미지 업로드
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onRemoveImage = useCallback((i) => () => {
    dispatch({
      type: REMOVE_IMAGE,
      index: i,
    });
  }, []);

  return (
    <Form onFinish={onSubmitForm}>
      <div>
        <Select
          placeholder="카테고리"
          name="categoty"
          onChange={onSelectCategory}
          options={postCategoryList(myMajorInfo, categoryData)}
          menuPlacement="auto"
          maxMenuHeight={150}
        />
      </div>
      <Input.TextArea
        value={title}
        onChange={onChangeTitle}
        autoSize={{ minRows: 1, maxRows: 1 }}
        onKeyDown={onEnter}
        placeholder="제목"
      />
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        autoSize={{ minRows: 4 }}
        placeholder="내용을 입력해주세요."
      />
      <div>
        <Button
          type="primary"
          htmlType="submit"
          loading={addPostLoading}
        >
          <b>작성</b>
        </Button>
        <Form encType="multipart/form-data" onClick={onClickImageUpload}>
          <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
          <FileImageOutlined />
        </Form>
      </div>
      <br />
      <br />
      <div>
        {imagePaths.map((v, i) => (
          <div key={v}>
            <img src={v} alt={v} />
            <div onClick={onRemoveImage(i)}>
              <CloseCircleOutlined />
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;

```

----------

- [게시글 기능 구현1 바로가기](./nutee_post1)
- [게시글 기능 구현3 바로가기](./nutee_post3)