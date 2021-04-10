import Link from "../../components/link";
import Page from "../../components/page";
import Small from "../../components/small";
import SpaceContainer from "../../components/space-container";
import Tag from "../../components/tag";
import Title from "../../components/title";
import { Post, getAllPosts } from "../../utils/posts";

type Props = {
  posts: Post[];
};

const Blog = ({ posts }: Props) => (
  <Page title="🚧 Recent posts">
    <SpaceContainer size="md">
      {posts.map((post) => (
        <SpaceContainer key={post.slug} size="xs">
          <div>
            <Link href={`/blog/${post.slug}`}>
              <Title>{post.title}</Title>
            </Link>

            <Small>
              {post.relativeDate} · {post.readingTime} minute read
            </Small>
          </div>

          <p>
            {post.excerpt} <Link href={`/blog/${post.slug}`}>Read more...</Link>
          </p>

          <div>
            {post.tags.map((tag) => (
              <Tag key={`${post.slug}-${tag}`}>{tag}</Tag>
            ))}
          </div>
        </SpaceContainer>
      ))}
    </SpaceContainer>
  </Page>
);

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
}

export default Blog;
