import PostPreview from './post/preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
};

const Posts = ({ posts }: Props) => {
  return (
    <section>
      { posts.map((post) => (
        <PostPreview
          key={post.id}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          id={post.id}
          excerpt={post.excerpt}
        />
      ))}
    </section>
  )
}

export default Posts;