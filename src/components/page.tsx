import Head from "next/head";
import { ReactNode } from "react";

import Display from "./display";
import Heading from "./heading";
import Section from "./section";

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
      <Display>
        {title}
        {meta && (
          <p className="font-normal mt-2 text-primary-600 text-sm">{meta}</p>
        )}
      </Display>

      {subtitle && <Heading>{subtitle}</Heading>}

      <div className="mt-4">{children}</div>
    </Section>
  </>
);

export default Page;
