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
  const [tag, setTag] = useState<string>('ALL');

  return (
    <div onContextMenu={e => e.preventDefault()} onSelect={() => { return false }}>
      <Head>
        <title>jiwon kim의 {CMS_NAME}</title>
        <link href="https://fonts.googleapis.com/css?family=Black+Han+Sans:400,700,800" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Nanum+Myeongjo:400,700,800" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Anton:400,700,800" rel="stylesheet"></link>
      </Head>
      <Layout >
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
        <Footer />
      </Layout>
    </div>
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
