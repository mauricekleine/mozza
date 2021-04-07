import Link from "../../components/link";
import Page from "../../components/page";
import SpaceContainer from "../../components/space-container";
import Tag from "../../components/tag";

const Blog = () => (
  <Page title="Recent posts 🚧">
    <SpaceContainer size="xl">
      <div>
        <Link className="font-bold text-xl" href="/blog/my-second-post">
          My second post
        </Link>

        <p className="h-48 overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam neque
          risus, dapibus at vulputate ut, ullamcorper in justo. Etiam eget leo
          eros. Nunc id fringilla dolor, eu pretium sapien. Mauris vestibulum
          hendrerit massa vel vehicula. Aenean ornare varius est, at gravida
          metus tempus et. Donec eget dui a dui congue consequat id id libero.
          Fusce sed elit a erat congue vehicula vel id turpis. Donec molestie
          luctus eros, sed dictum justo aliquet in. Nam id elit a nunc cursus
          bibendum. Sed id sagittis ipsum. Mauris eu ullamcorper elit. Quisque
          luctus turpis at ante eleifend interdum. Sed vehicula purus ac risus
          fringilla varius. Sed convallis, justo eget posuere vehicula, neque
          quam semper arcu, non consectetur mauris nisl at nulla.
        </p>

        <p className="mt-3 mb-2">
          <Link href="/blog/my-second-post">Read more...</Link>
        </p>

        <div>
          <Tag>Mental health</Tag>
          <Tag>Mindfulness</Tag>
        </div>
      </div>

      <div>
        <Link className="font-bold text-xl" href="/blog/my-first-post">
          My first post
        </Link>

        <p className="h-48 overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam neque
          risus, dapibus at vulputate ut, ullamcorper in justo. Etiam eget leo
          eros. Nunc id fringilla dolor, eu pretium sapien. Mauris vestibulum
          hendrerit massa vel vehicula. Aenean ornare varius est, at gravida
          metus tempus et. Donec eget dui a dui congue consequat id id libero.
          Fusce sed elit a erat congue vehicula vel id turpis. Donec molestie
          luctus eros, sed dictum justo aliquet in. Nam id elit a nunc cursus
          bibendum. Sed id sagittis ipsum. Mauris eu ullamcorper elit. Quisque
          luctus turpis at ante eleifend interdum. Sed vehicula purus ac risus
          fringilla varius. Sed convallis, justo eget posuere vehicula, neque
          quam semper arcu, non consectetur mauris nisl at nulla.
        </p>

        <p className="mt-3 mb-2">
          <Link href="/blog/my-first-post">Read more...</Link>
        </p>

        <div>
          <Tag>Book review</Tag>
          <Tag>Dystopian fiction</Tag>
        </div>
      </div>
    </SpaceContainer>
  </Page>
);

export default Blog;
