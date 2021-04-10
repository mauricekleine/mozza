import Head from "next/head";
import { ReactNode } from "react";

import Display from "./display";

type Props = {
  children: ReactNode | ReactNode[];
  title: string;
};

const Page = ({ children, title }: Props) => (
  <>
    <Head>
      <title>{title} | Maurice Kleine</title>
    </Head>

    <div className="px-6 sm:px-0">
      <Display>{title}</Display>

      {children}
    </div>
  </>
);

export default Page;
