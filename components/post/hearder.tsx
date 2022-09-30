import React from 'react';
import DateFormatter from './date-formatter';
import CoverImage from '../cover-image';
import PostTitle from './title';
import Style from '../../styles/post.module.scss';

type Props = {
  title: string
  coverImage: string
  date: string
}

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <CoverImage title={title} src={coverImage} />
      <PostTitle link={false} id={''}>{title}</PostTitle>
      <DateFormatter dateString={date} />
      <hr />
    </>
  )
};

export default PostHeader
