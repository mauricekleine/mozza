import { ReactNode } from "react";

import { As } from "../system";

type Props = {
  as: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
};

export function Header({
  as,
  children,
  className,
}: Props & {
  className?: string;
}) {
  return (
    <As as={as} className={className}>
      {children}
    </As>
  );
}

export type { Props as HeaderProps };
