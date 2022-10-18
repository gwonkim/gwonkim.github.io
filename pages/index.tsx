import React, { useState } from "react";
import PostView from "../components/posts";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getCategoryPost } from "../lib/api";
import Head from "next/head";
import { CMS_NAME, POST_CATEGORT } from "../lib/constants";
import Post from "../interfaces/post";
import Style from "../styles/tag.module.scss";
import Footer from "../components/footer";

type Props = {
  preview?: boolean,
  allPosts: Post[],
};

export default function Index({ allPosts }: Props) {
  const [ tag, setTag ] = useState<string>('all');

  return (
    <>
      <Head>
        <title>jiwon kim의 {CMS_NAME}</title>
      </Head>
      <Layout>
        <Intro />
        {/* 페이지 설명 */}

        <div className={Style.box}>
          {POST_CATEGORT.map((category, i) => (
            <span onClick={() => setTag(category)} key={i}>{category}</span>
          ))}
        </div>
        {allPosts[tag].length > 0 ? <PostView posts={allPosts[tag]} />
      : <h3 className={Style.text}>해당 카테고리에는 게시글이 없습니다.</h3>  
      }
        {/*   {pin && (
            <PinPost
            title={pin.title}
            coverImage={pin.coverImage}
            date={pin.date}
            id={pin.id}
            excerpt={pin.excerpt}
            />
            )}
          <hr />
          <h2>게시물</h2>
          {posts.length > 0 && <PostView posts={posts} />} */}
          <Footer />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getCategoryPost([
    "title",
    "date",
    "id",
    "coverImage",
    "excerpt",
    "category"
  ]);

  return { props: { allPosts } };
};
