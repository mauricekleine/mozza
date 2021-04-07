import { GetStaticPropsContext } from "next";
import remark from "remark";
import html from "remark-html";

import Page from "../../components/page";
import Tag from "../../components/tag";
import { Post, getPostBySlug, getPostSlugs } from "../../utils/posts";

type Props = {
  post: Post;
};

const BlogPost = ({ post }: Props) => (
  <Page
    meta={`${post.relativeDate} · ${post.readingTime} minute read`}
    title={post.title}
  >
    <div className="space-y-3">
      <div
        className="leading-relaxed prose text-primary-600"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div>
        {post.tags.map((tag) => (
          <Tag key={`${post.slug}-${tag}`}>{tag}</Tag>
        ))}
      </div>
    </div>
  </Page>
);

export const getStaticPaths = async () => {
  const slugs = getPostSlugs();
  const paths = slugs.map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  const post = getPostBySlug(params.slug);
  const result = await remark().use(html).process(post.content);
  const content = result.toString();

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export default BlogPost;
