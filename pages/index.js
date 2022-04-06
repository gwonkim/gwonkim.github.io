import React, { useState } from "react";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Style from '../css/postTitle.module.css'

const Home = ({ allPost, allTitle }) => {
 console.log("usepostrs >>>", allPost);
  return (
    <div className={Style.post}>
      <h1>Hi I'm Jiwon</h1>
      <h2>Blog</h2>
{/*       {allPost && allPost.map((post) => {
          return (
              <div className={Style.titleLayout} key={post.id}>
                <p className={Style.id}>{post.id}</p>
                <p className={Style.title}>{post.title}</p>
                <p className={Style.date}>{post.date}</p>
              </div>
          );
        })} */}
    </div>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  // console.log('----------------------');
  //console.log(allPostsData);

  return {
    props: {
      allPost: allPostsData,
    },
  };
};

export default Home;
