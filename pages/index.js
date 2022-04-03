import React, { useState } from "react";
// import PostLayout from "../components/PostLayout";
import { getSortedPostsData } from "../lib/post2";

const Home = ({ allPostsData }) => {
  const { data, onData } = useState(allPostsData);
  console.log("aaaaaaa", allPostsData);
  console.log("data", data);
  return (
    <>
      <h2>Blog</h2>
      <ul>
        {allPostsData &&
          allPostsData.map(a => {
            return (
              <li key={id}>
                {a.title}
                <br />
                {a.id}
                <br />
                {a.date}
              </li>
            );
          })}
        {allPostsData}
      </ul>
    </>
  );
};

export default Home;

/* export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    const postData = getPostData(params.id);
    return {
        props : {
            postData
        }
    };
};
 */
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log("allPostsData");
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}

// 이제 url의 id값을 getPostData에 전달하고
// 해당하는 postData를 불러와서 props로 전달 받음.
