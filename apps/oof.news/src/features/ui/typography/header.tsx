import { ReactNode } from "react";

import styles from "./header.module.scss";

type Props = {
  as: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
  variant?: Props["as"];
};

export function Header({ as, children, variant = as }: Props) {
  const As = as;

  return <As className={styles[variant]}>{children}</As>;
}

export type { Props as HeaderProps };
