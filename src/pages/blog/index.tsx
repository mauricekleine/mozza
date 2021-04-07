import Link from "../../components/link";
import Page from "../../components/page";
import SpaceContainer from "../../components/space-container";
import Tag from "../../components/tag";
import { Post, getAllPosts } from "../../utils/posts";

type Props = {
  posts: Post[];
};

const Blog = ({ posts }: Props) => (
  <Page title="🚧 Recent posts">
    <SpaceContainer size="xl">
      {posts.map((post) => (
        <div className="space-y-3" key={post.slug}>
          <div>
            <Link className="font-bold text-xl" href={`/blog/${post.slug}`}>
              {post.title}
            </Link>

            <p className="font-sans text-primary-600 text-sm">
              {post.relativeDate} · {post.readingTime} minute read
            </p>
          </div>

          <p>
            {post.excerpt}{" "}
            <Link className="text-primary-600" href={`/blog/${post.slug}`}>
              Read more...
            </Link>
          </p>

          <div className="text-primary-600 text-sm">
            {post.tags.map((tag) => (
              <Tag key={`${post.slug}-${tag}`}>{tag}</Tag>
            ))}
          </div>
        </div>
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
