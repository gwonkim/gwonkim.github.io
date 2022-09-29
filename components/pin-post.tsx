import React from 'react';
import PostPreview from './post/preview';

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  id: string
}

const PinPost = ({ title, coverImage, date, excerpt, id }: Props) => {
  return (
    <section>
      <PostPreview
        key={id}
        title={title}
        coverImage={coverImage}
        date={date}
        id={id}
        excerpt={excerpt} />
    </section>
  )
}

export default PinPost
