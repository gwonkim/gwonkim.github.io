import React from 'react'
import Link from 'next/link'
import DateFormatter from './date-formatter'
import CoverImage from '../cover-image'
import Style from '../../styles/post.module.scss';

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  id: string
};

const PostPreview = ({ title, date, excerpt, coverImage, id }: Props) => {
  return (
    <div className={Style.post}>
      <div>
        <CoverImage id={id} title={title} src={coverImage} />
      </div>
      <h1>
        <Link as={`/posts/${id}`} href="/posts/[id]">
          <a>{title}</a>
        </Link>
      </h1>
      <div>
        <DateFormatter dateString={date} />
      </div>
      <p>{excerpt}</p>
    </div>
  )
};

export default PostPreview;
