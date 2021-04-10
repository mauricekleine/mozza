import { GetStaticPropsContext } from "next";
import remark from "remark";
import html from "remark-html";

import Page from "../../components/page";
import Small from "../../components/small";
import SpaceContainer from "../../components/space-container";
import Tag from "../../components/tag";
import { Post, getPostBySlug, getPostSlugs } from "../../utils/posts";

type Props = {
  post: Post;
};

const BlogPost = ({ post }: Props) => (
  <Page title={post.title}>
    <div className="mb-12 -mt-8">
      <Small>
        {post.relativeDate} · {post.readingTime} minute read
      </Small>
    </div>

    <SpaceContainer size="xs">
      <div
        className="leading-normal prose text-primary-700 dark:text-primary-200"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div>
        {post.tags.map((tag) => (
          <Tag key={`${post.slug}-${tag}`}>{tag}</Tag>
        ))}
      </div>
    </SpaceContainer>
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
