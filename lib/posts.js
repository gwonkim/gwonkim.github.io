import path from "path";
import matter from "gray-matter";
import fs from "fs";
import { POST_CATEGORT } from "../static";

const postsDirectory = path.join(process.cwd(), "components/posts");

export function postCategoryConfig(category) {
  if (category) {
    return path.join(process.cwd(), "components/posts");
  } else {
    return path.join(process.cwd(), "components/posts");
  }
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const id = fileName.replace(/\.md$/, "");
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// 모든 포스트 id
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export function getCategoryPostsData(category) {
  const fileNames = fs.readdirSync(postsDirectory);

  const categoryPost = fileNames.filter(v => {
    const cate = v.split('__')[0]; // category
    cate === category ? true : false;
  });

  const allPostsData = categoryPost.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const id = fileName.replace(/\.md$/, "");
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
