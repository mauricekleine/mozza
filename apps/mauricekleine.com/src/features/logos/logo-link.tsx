import { ComponentType } from "react";

import styles from "./logo-link.module.scss";

type Props = {
  "aria-label"?: string;
  href: string;
  logo: ComponentType;
};

export function LogoLink({ "aria-label": ariaLabel, href, logo }: Props) {
  const Logo = logo;

  return (
    <a
      aria-label={ariaLabel}
      className={styles["logo-link"]}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Logo />
    </a>
  );
}
