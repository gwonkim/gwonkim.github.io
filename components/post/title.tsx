import React, { ReactNode } from 'react';
import Link from 'next/link'

type Props = {
  children?: ReactNode
  link: boolean
  id: string
}

const PostTitle = ({ children, link, id }: Props) => {
  return (
    link ?
      (<h1>
        <Link as={`/posts/${id}`} href="/posts/[id]">
          <a>{children}</a>
        </Link>
      </h1>)
      : (<h1>{children}</h1>)
  )
}

export default PostTitle
