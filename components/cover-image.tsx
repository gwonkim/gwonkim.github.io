import React from 'react';
import Link from 'next/link';
import { DEFAULT_IMAGE } from '../lib/constants';

type Props = {
  title: string
  src: string
  id?: string
};

const CoverImage = ({ title, src, id }: Props) => {
  const image = (
    <img
      src={src ? src : DEFAULT_IMAGE}
      alt={`${title}의 커버 이미지입니다.`}
    />
  );

  return (
    <div>
      {id ?
        <Link as={`/posts/${id}`} href="/posts/[id]">
          <a aria-label={title}>{image}</a>
        </Link>
        : image}
    </div>
  )
};

export default CoverImage
