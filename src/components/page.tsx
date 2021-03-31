import { ReactNode } from "react";

import Display from "./display";
import Heading from "./heading";
import Section from "./section";

type Props = {
  children: ReactNode | ReactNode[];
  subtitle: string | ReactNode;
  title: string;
};

const Page = ({ children, subtitle, title }: Props) => (
  <Section>
    <Display>{title}</Display>

    <Heading>{subtitle}</Heading>

    <div className="mt-4">{children}</div>
  </Section>
);

export default Page;
