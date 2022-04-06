import React from 'react';
import PostLayout from '../../components/PostLayout';
// import Layout from "../../components/Layout";
import { getAllPostIds } from "../../lib/posts";

const Post = ({ postData }) => {
    return (
        <PostLayout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
            <br/>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </PostLayout>
    );
};

export default Post;


export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    const postData = await getPostData(params.id);
    return {
        props : {
            postData
        }
    };
};


// 이제 url의 id값을 getPostData에 전달하고 
// 해당하는 postData를 불러와서 props로 전달 받음.