import React from "react";
import Link from "next/link";
import DateFormatter from "./date-formatter";
import CoverImage from "../cover-image";
import PostTitle from "./title";
import Style from "../../styles/post.module.scss";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  id: string;
};

const PostPreview = ({ title, date, excerpt, coverImage, id }: Props) => {
  return (
    <Link as={`/posts/${id}`} href="/posts/[id]">
      <div className={Style.post}>
        {coverImage ? (
          <CoverImage id={id} title={title} src={coverImage} />
        ) : (
          <></>
        )}
        <PostTitle id={id} link={true}>
          {title}
        </PostTitle>
        <DateFormatter dateString={date} />
        <p>{excerpt}</p>
      </div>
    </Link>
  );
};

export default PostPreview;
