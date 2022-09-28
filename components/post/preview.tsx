import DateFormatter from '../date-formatter'
import CoverImage from '../cover-image'
import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  id: string
}

const PostPreview = ({ title, date, excerpt, id }: Props) => {
  return (
    <div style={{'border' : '3px soild brown' }}>
      {/* <div className="mb-5">
        <CoverImage id={id} title={title} src={coverImage} />
      </div> */}
      <h1>
        <Link as={`/posts/${id}`} href="/posts/[id]">
          <a>{title}</a>
        </Link>
      </h1>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}

export default PostPreview
