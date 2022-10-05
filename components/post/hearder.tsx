import React from 'react';
import DateFormatter from './date-formatter';
import PostTitle from './title';

type Props = {
  title: string
  date: string
}

const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      <PostTitle link={false} id={''}>{title}</PostTitle>
      <DateFormatter dateString={date} />
      <hr />
    </>
  )
};

export default PostHeader
