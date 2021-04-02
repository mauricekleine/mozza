import { useRouter } from "next/dist/client/router";

import Page from "../../components/page";
import Tag from "../../components/tag";
import { slugToString } from "../../utils/string";

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const title = slug ? slugToString(slug as string) : "";

  return (
    <Page title={title}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam neque
        risus, dapibus at vulputate ut, ullamcorper in justo. Etiam eget leo
        eros. Nunc id fringilla dolor, eu pretium sapien. Mauris vestibulum
        hendrerit massa vel vehicula. Aenean ornare varius est, at gravida metus
        tempus et. Donec eget dui a dui congue consequat id id libero. Fusce sed
        elit a erat congue vehicula vel id turpis. Donec molestie luctus eros,
        sed dictum justo aliquet in. Nam id elit a nunc cursus bibendum. Sed id
        sagittis ipsum. Mauris eu ullamcorper elit. Quisque luctus turpis at
        ante eleifend interdum. Sed vehicula purus ac risus fringilla varius.
        Sed convallis, justo eget posuere vehicula, neque quam semper arcu, non
        consectetur mauris nisl at nulla.
      </p>

      <div>
        <Tag>Mental health</Tag>
        <Tag>Mindfulness</Tag>
      </div>
    </Page>
  );
};

export default BlogPost;
