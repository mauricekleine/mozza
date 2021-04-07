import fs from "fs";
import { join } from "path";

import { compareDesc, formatDistanceToNow } from "date-fns";
import matter from "gray-matter";

export type Post = {
  content: string;
  date: string;
  excerpt: string;
  readingTime: number;
  relativeDate: string;
  slug: string;
  tags: string[];
  title: string;
};

const WORDS_PER_MINUTE = 200;

const postsDirectory = join(process.cwd(), "src/data/posts");

export const getAllPosts = () => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) =>
      compareDesc(new Date(post1.date), new Date(post2.date))
    );

  return posts;
};

export const getPostBySlug = (slug: string): Post => {
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / WORDS_PER_MINUTE);

  return {
    content,
    date: data.date,
    excerpt: data.excerpt,
    readingTime,
    relativeDate: `${formatDistanceToNow(new Date(data.date))} ago`,
    slug,
    tags: data.tags,
    title: data.title,
  };
};

export const getPostSlugs = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((name) => name.replace(".md", ""));
};
