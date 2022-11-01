import type { ReactNode } from "react";

import Display from "~/ui/display";

type Props = {
  children: ReactNode | ReactNode[];
  title: string;
};

export default function Page({ children, title }: Props) {
  return (
    <div className="px-6 sm:px-0">
      <Display>{title}</Display>

      {children}
    </div>
  );
}
