import path from "path";
import matter from "gray-matter";
import fs from "fs";

const postsDirectory = path.join(process.cwd(), "components/posts/react");

export function getSortedPostsData() {
  let allPost = new Array();

  const fileNames = fs.readdirSync(postsDirectory);

  console.log('-=====================================-')
  fileNames.map(fileName => {
      console.log('fileName', fileName)
    // fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
     //  console.log('matterResult', matterResult);
      let name = fileName.split(/\_/);
      const id = name[1].replace(/\.md$/, "");
    console.log('// allPost.name[0]TTTT', allPost[name[0]]);
    let len = allPost[name[0]].length;
    allPost[name[0]][len] = {
        id,
        ...matterResult.data,
    };
/*     allPost.name[0][allPost[name[0]].length] = {
      id,
      ...matterResult.data,
    }; */
    console.log('allPost[name[0]] AAA', allPost);
  });
  console.log('allpost -----', allPost)
  console.log('-------------------------------------')
  // return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  return allPost;
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
