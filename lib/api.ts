import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { POST_CATEGORT } from "./constants";

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
  const posts = ids.map((id) => getPostById(id, fields))  // 날짜별 정렬
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};

export function getCategoryPost(fields: string[] = []) {
  const ids = getPostIds();
  const CATEGORT: any = {};
  const posts = ids.map((id) => getPostById(id, fields)).filter(v => v.title !== 'pin').sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  
  POST_CATEGORT.map((c) => {
    CATEGORT[c] = posts.map((v: any) => v.category === c && v.category !== 'pin')
  })

  POST_CATEGORT.map((c) => {
    CATEGORT[c] = [];
    posts.map((v: any) => {
      if (v.category === c) {
        CATEGORT[c].push(v);
      }
    })
  })

  CATEGORT['all'] = posts;
  return CATEGORT;
};
