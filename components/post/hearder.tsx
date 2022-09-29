import React from 'react';
import DateFormatter from './date-formatter';
import CoverImage from '../cover-image';
import PostTitle from './title';

type Props = {
  title: string
  coverImage: string
  date: string
}

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <CoverImage title={title} src={coverImage} />
      <DateFormatter dateString={date} />
    </>
  )
};

export default PostHeader
