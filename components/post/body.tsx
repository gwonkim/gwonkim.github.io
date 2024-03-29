import React from 'react';
import markdownStyles from '../../styles/markdown-styles.module.css';

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div
      style={{'marginTop': '30px'}}
      className={markdownStyles['markdown']}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
};

export default PostBody
