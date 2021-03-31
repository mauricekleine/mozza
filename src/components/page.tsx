import { ReactNode } from "react";

import Heading from "./heading";
import Section from "./section";

type Props = {
  children: ReactNode | ReactNode[];
  subtitle: string | ReactNode;
  title: string;
};

const Page = ({ children, subtitle, title }: Props) => (
  <div className="mt-8">
    <Section>
      <Heading>{title}</Heading>

      <p className="mb-8">{subtitle}</p>

      <div>{children}</div>
    </Section>
  </div>
);

export default Page;
