import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostIds() {
  return fs.readdirSync(postsDirectory);
};

export function getPostById(id: string, fields: string[] = []) {
  const realID = id.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realID}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field === 'id') {
      items[field] = realID;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
};

export function getAllPosts(fields: string[] = []) {
  const ids = getPostIds();
  // 날짜별 정렬
  const posts = ids.map((id) => getPostById(id, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};
