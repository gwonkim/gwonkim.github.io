import Head from "next/head";
import Layout from "../components/layout";
import Style from "../styles/pin.module.scss";
import PostView from "../components/posts";
import Post from "../interfaces/post";
import { getProjectPosts } from "../lib/api";
import Footer from "../components/footer";
import Resume from "../components/resume";

type Props = {
  projects: Post[];
};

const Pin = ({ projects }: Props) => {
  return (
    <Layout>
      <Head>
        <script
          type="text/javascript"
          async
          src="//cdn.credly.com/assets/utilities/embed.js"
        ></script>
      </Head>
      <section className={Style.container}>
        <Resume />
        <hr className={Style.line} />
        <h2>#프로젝트</h2>
        {projects.length > 0 && <PostView posts={projects} />}
      </section>
      <Footer />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const projects = getProjectPosts([
    "title",
    "date",
    "id",
    "coverImage",
    "excerpt",
    "category",
  ]);
  return { props: { projects } };
};

export default Pin;
