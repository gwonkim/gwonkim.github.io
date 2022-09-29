import React from "react";
import PostView from "../components/posts";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import PinPost from "../components/pin-post";

type Props = {
  preview?: boolean;
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const pin = allPosts.find(v => v.title === 'pin');
  const posts = allPosts.filter(v => v.title !== 'pin');
  return (
    <>
      <Head>
        <title>jiwon kim의 {CMS_NAME}</title>
      </Head>
      <Layout>
          <Intro /> {/* 페이지 설명 */}
          {pin && (
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
          {posts.length > 0 && <PostView posts={posts} />}
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "id",
    "coverImage",
    "excerpt",
  ]);

  return { props: { allPosts } };
};
