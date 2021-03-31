import Card from "../../components/card";
import CardContent from "../../components/card-content";
import CardTitle from "../../components/card-title";
import InternalLink from "../../components/internal-link";
import Page from "../../components/page";
import Tag from "../../components/tag";

const Blog = () => {
  return (
    <Page subtitle="" title="Recent posts [WIP 🚧]">
      <div className="space-y-4">
        <Card>
          <CardContent>
            <CardTitle>My second post</CardTitle>

            <p className="h-48 overflow-hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              neque risus, dapibus at vulputate ut, ullamcorper in justo. Etiam
              eget leo eros. Nunc id fringilla dolor, eu pretium sapien. Mauris
              vestibulum hendrerit massa vel vehicula. Aenean ornare varius est,
              at gravida metus tempus et. Donec eget dui a dui congue consequat
              id id libero. Fusce sed elit a erat congue vehicula vel id turpis.
              Donec molestie luctus eros, sed dictum justo aliquet in. Nam id
              elit a nunc cursus bibendum. Sed id sagittis ipsum. Mauris eu
              ullamcorper elit. Quisque luctus turpis at ante eleifend interdum.
              Sed vehicula purus ac risus fringilla varius. Sed convallis, justo
              eget posuere vehicula, neque quam semper arcu, non consectetur
              mauris nisl at nulla.
            </p>

            <InternalLink href="/blog/my-second-post">
              Read more...
            </InternalLink>

            <div>
              <Tag>Mental health</Tag>
              <Tag>Mindfulness</Tag>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <CardTitle>My first post</CardTitle>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              neque risus, dapibus at vulputate ut, ullamcorper in justo. Etiam
              eget leo eros. Nunc id fringilla dolor, eu pretium sapien. Mauris
              vestibulum hendrerit massa vel vehicula. Aenean ornare varius est,
              at gravida metus tempus et. Donec eget dui a dui congue consequat
              id id libero. Fusce sed elit a erat congue vehicula vel id turpis.
              Donec molestie luctus eros, sed dictum justo aliquet in. Nam id
              elit a nunc cursus bibendum. Sed id sagittis ipsum. Mauris eu
              ullamcorper elit. Quisque luctus turpis at ante eleifend interdum.
              Sed vehicula purus ac risus fringilla varius. Sed convallis, justo
              eget posuere vehicula, neque quam semper arcu, non consectetur
              mauris nisl at nulla.
            </p>

            <InternalLink href="/blog/my-first-post">Read more...</InternalLink>

            <div>
              <Tag>Book review</Tag>
              <Tag>Dystopian fiction</Tag>
            </div>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

export default Blog;
