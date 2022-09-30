import React from 'react';
import DateFormatter from './date-formatter';
import CoverImage from '../cover-image';
import PostTitle from './title';
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
      <CoverImage id={id} title={title} src={coverImage} />
      <PostTitle id={id} link={true} >{title}</PostTitle>
      <DateFormatter dateString={date} />
      <p>{excerpt}</p>
    </div>
  )
};

export default PostPreview;
