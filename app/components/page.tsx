import type { ReactNode } from "react";

import Display from "~/components/display";

type Props = {
  children: ReactNode | ReactNode[];
  title: string;
};

const Page = ({ children, title }: Props) => (
  <div className="px-6 sm:px-0">
    <Display>{title}</Display>

    {children}
  </div>
);

export default Page;
