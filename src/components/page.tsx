import Head from "next/head";
import { ReactNode } from "react";

import Display from "./display";
import Heading from "./heading";
import Section from "./section";
import Small from "./small";

type Props = {
  children: ReactNode | ReactNode[];
  meta?: ReactNode;
  subtitle?: ReactNode;
  title: string;
};

const Page = ({ children, meta, subtitle, title }: Props) => (
  <>
    <Head>
      <title>{title} | Maurice Kleine</title>
    </Head>

    <Section>
      <Display>{title}</Display>

      {meta && <Small>{meta}</Small>}

      {subtitle && <Heading>{subtitle}</Heading>}

      <div className="mt-4">{children}</div>
    </Section>
  </>
);

export default Page;
