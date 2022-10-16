import React from 'react';
import Link from 'next/link';

type Props = {
  title: string
  src: string
  id?: string
};

const CoverImage = ({ title, src, id }: Props) => {
  return (
    <div>
      {id ?
          <Link as={`/posts/${id}`} href="/posts/[id]">
            <a aria-label={title}>
              <img
                src={src}
                alt={`${title}의 커버 이미지입니다.`}
              />
            </a>
          </Link>
          : <></>}
    </div>
  )
};

export default CoverImage
