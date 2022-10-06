import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import PostHeader from '../../components/post/hearder';
import PostTitle from '../../components/post/title';
import PostBody from '../../components/post/body';
import Layout from '../../components/layout';
import type PostType from '../../interfaces/post';
import { getPostById, getAllPosts } from '../../lib/api';
import { CMS_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import Style from '../../styles/post.module.scss';
import Footer from '../../components/footer';

type Props = {
    post: PostType
};

export default function Post({ post }: Props) {
    const router = useRouter();

    if (!router.isFallback && !post?.id) {
        return <ErrorPage statusCode={404} />
    };
    return (
        <Layout>
            {router.isFallback ? (
                <PostTitle link={false} id={''}>Loading…</PostTitle>
            ) : (
                <>
                    <article>
                        <Head>
                            <title>
                                {post.title} | Jiwon's blog {CMS_NAME}
                            </title>
                        </Head>
                        <PostHeader
                            title={post.title}
                            date={post.date}
                        />
                        <div className={Style.body}>

                        <PostBody content={post.content} />
                        </div>
                    </article>
                </>
            )}
            <Footer />
        </Layout>
    )
}

type Params = {
    params: {
        id: string
    }
}

export async function getStaticProps({ params }: Params) {
    const post = getPostById(params.id, [
        'title',
        'date',
        'id',
        'content',
    ]);
    const content = await markdownToHtml(post.content || '');

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts(['id']);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    id: post.id,
                },
            }
        }), fallback: false
    };
}
