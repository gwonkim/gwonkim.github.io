import React, { useMemo, useEffect, useCallback, useState } from "react";
import PropTypes from "prop-types";
// import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  List,
  Badge,
  Modal,
  Tag,
  Button,
  Popover,
  Tabs,
  Divider,
  Avatar,
} from "antd";
const { TabPane } = Tabs;
import {
  AlertOutlined,
  MessageOutlined,
  HeartTwoTone,
  HeartOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

export const Test = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);

  const tabsWrapper = useMemo(
    () => ({
      color: "#005000",
      marginTop: "10px",
      fontWeight: "bold",
      lineHeight: "15px",
      paddingBotton: "10px",
    }),
    []
  );
  const tabPaneWrapper = useMemo(
    () => ({ color: "black", fontWeight: "normal" }),
    []
  );

  const postCardWrapper = useMemo(
    () => ({
      minWidth: "500px",
      width: "50wv",
      borderRadius: "2px",
      border: "2px solid #c8e6d7",
      maxWidth: "700px",
      marginBottom: "15px",
    }),
    []
  );
  const mobilePostCardWrapper = useMemo(
    () => ({
      minWidth: "250px",
      width: "50wv",
      borderRadius: "2px",
      border: "2px solid #c8e6d7",
      maxWidth: "700px",
      marginBottom: "15px",
    }),
    []
  );
  const blockCardWrapper = useMemo(
    () => ({ background: "#F6CED8", textAlign: "center" }),
    []
  );
  const heartWrapper = useMemo(
    () => ({ color: "#eb2f96", fontSize: "20px" }),
    []
  );
  const badge2Wrapper = useMemo(
    () => ({ background: "#87d068", size: "small", zIndex: "0" }),
    []
  );
  const badge3Wrapper = useMemo(
    () => ({ background: "#005000", size: "small", zIndex: "0" }),
    []
  );
  const listWrapper = useMemo(
    () => ({ background: "#f0faf5", paddingBottom: "0px", height: "auto" }),
    []
  );
  const commentWrapper = useMemo(
    () => ({
      background: "#f0faf5",
      border: "2px solid #fff",
      height: "auto",
      justiceContent: "center",
    }),
    []
  );
  const commentFormWrapper = useMemo(
    () => ({ background: "#f0faf5", height: "auto", margin: "10px 15px" }),
    []
  );
  const nicknameWrapper = useMemo(
    () => ({ fontSize: "18px", margin: "0" }),
    []
  );
  const iconWrapper = useMemo(() => ({ fontSize: "23px" }), []);
  const tagWrapper = useMemo(() => ({ marginBottom: "15px" }), []);
  const postWrapperTest = useMemo(() => ({ margin: "0", padding: "0" }), []);
  const prefixWrapper = useMemo(() => ({ marginRight: "10px" }), []);
  const momentWrapper = useMemo(() => ({ fontSize: "14px" }), []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened(prev => !prev);
    if (!commentFormOpened) {
      dispatch({
        type: LOAD_COMMENTS_REQUEST,
        data: {
          postId: post.id,
        },
        lastId,
      });
      setlastId(lastId + 5);
    }
  }, []);

  const onLike = useCallback(() => {
    if (!me.id) return alert("로그인이 필요합니다.");
    if (me.id === user) return alert("자신의 글은 좋아요를 누를 수 없습니다.");
    return dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id,
      user: {
        id: me.id,
        nickname: me.nickname,
        image: me.image,
      },
    });
  }, []);

  const onUnLike = useCallback(() => {
    if (!me.id) return alert("로그인이 필요합니다.");
    return dispatch({
      type: UNLIKE_POST_REQUEST,
      postId: post.id,
      userId: me.id,
    });
  }, []);

  const onRemovePost = useCallback(() => {
    setPopoverVisible(false);
    // eslint-disable-next-line no-restricted-globals
    const result = confirm("정말로 삭제하시겠습니까?");
    if (!result) {
      return;
    }
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  });

  const onReport = useCallback(() => {
    setPopoverVisible(false);
    setReportVisible(true);
  });

  const EllipsisContent = (
    <>
      <Button>수정</Button>
      <Button type="danger">삭제</Button>
    </>
  );

  const locale = {
    emptyText: (
      <div style={{ paddingTop: "20px", paddingBottom: "10px" }}>
        <p>댓글이 없습니다.</p>
      </div>
    ),
  };

  const content =
    "안녕하세요 이것은 테스트입니다. #테스트 #게시글 https://www.google.com/";
  const content2 = "#테스트 #게시글 ";

  const pageWrapper = useMemo(() => ({ margin: "0 30px 15px 0" }), []);
  const postDataPreWrapper = useMemo(
    () => ({
      wordWrap: "break-word",
      whiteSpace: "pre-wrap",
      wordBreak: "break-all",
      fontFamily: "NanumBarunGothic",
      fontSize: "15px",
    }),
    []
  );
  const h5Wrapper = useMemo(
    () => ({
      position: "absolute",
      right: "25px",
      bottom: "60px",
      fontSize: "12px",
    }),
    []
  );
  const preWrapper = useMemo(
    () => ({
      wordWrap: "break-word",
      whiteSpace: "pre-wrap",
      wordBreak: "break-all",
    }),
    []
  );

  return (
    <div
      style={{
        margin: "50px",
        minWidth: "500px",
        width: "50wv",
        borderRadius: "2px",
        border: "2px solid #c8e6d7",
        maxWidth: "700px",
        marginBottom: "15px",
      }}
    >
      {/* <Tabs defaultActiveKey="2" style={tabsWrapper}>
      <TabPane tab="즐겨찾기" key="1" style={tabPaneWrapper}> */}
      <Card
        /*   cover={editMode ? <></> : postImage} */
        actions={[
          <Badge
            count="0"
            onClick={onToggleComment}
            size="small"
            style={badge3Wrapper}
          >
            <MessageOutlined style={iconWrapper} />
          </Badge>,
          <Badge count={0} size="small" style={badge2Wrapper}>
            {
              <HeartTwoTone
                twoToneColor="#eb2f96"
                key="heart"
                style={heartWrapper}
              />
            }
          </Badge>,
          <Popover
            content={EllipsisContent}
            trigger="click"
            visible={popoverVisible}
            onVisibleChange={visible => setPopoverVisible(visible)}
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <div style={postWrapperTest}>
          {false ? (
            <></>
          ) : (
            <div style={tagWrapper}>
              <Tag color="purple">테스트</Tag>
            </div>
          )}
          <Card.Meta
            avatar={
              <>{<Avatar size={50} src="/assets/blog/image/bear.jpg" />}</>
            }
            title={
              <>
                <p style={nicknameWrapper}>test123</p>
                <span style={momentWrapper}>2020.10.23</span>
              </>
            }
            description={
              <>
                {/*    -------------------------- */}
                <div style={pageWrapper}>
                  {content.split("\n").length <= 7 ? (
                    <div style={postDataPreWrapper}>
                      {/*             {editMode
              ? (
                <>
                  <br />
                  <EditForm
                    postDataTotal={post}
                    onCancelEdit={onCancelEdit}
                  />
                </>
              )
              : ( */}
                      <>
                        <Divider orientation="left">게시글테스트</Divider>
                        {content.split(/(#[^\s]+)/g).map(v => {
                          if (v.match(/(#[^\s]+)/)) {
                            return (
                              <a
                                style={{ color: "#6b86c6", textWeight: "bold" }}
                              >
                                {v}
                              </a>
                            );
                          }
                          return v.split(/(\s)/gi).map(u => {
                            if (
                              u.match(
                                /(http(s)?:\/\/([a-z0-9\w]+\.*)+[a-z0-9]{2,4})/
                              )
                            ) {
                              return (
                                <a
                                  style={{
                                    color: "#6b86c6",
                                    textWeight: "bold",
                                  }}
                                >
                                  {u}
                                </a>
                              );
                            }
                            return u;
                          });
                        })}
                      </>

                      <br />
                      <h5 style={h5Wrapper}>{`댓글 0개 좋아요 15개`}</h5>
                    </div>
                  ) : (
                    <div>
                      <>
                        {content.split(/(#[^\s]+)/g).map(v => {
                          if (v.match(/(#[^\s]+)/)) {
                            return <a>{v}</a>;
                          }
                          return v.split(/(\s)/gi).map(u => {
                            if (
                              u.match(
                                /http(s)?:\/\/([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/
                              )
                            ) {
                              return <a>{u}</a>;
                            }
                            return u;
                          });
                        })}
                        <h5 style={h5Wrapper}>{`댓글 0개 좋아요 15개`}</h5>
                      </>
                    </div>
                  )}
                </div>
              </>
            }
          />
        </div>
      </Card>
      {/*       </TabPane>
      <TabPane tab="전체 게시글" key="2" style={tabPaneWrapper}>

      </TabPane>
      <TabPane tab="전공" key="3" style={tabPaneWrapper}>

      </TabPane>
    </Tabs>
         */}
    </div>
  );
};
export default Test;
