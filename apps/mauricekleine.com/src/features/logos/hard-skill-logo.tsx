import { Tooltip } from "~/ui/tooltip";

import styles from "./hard-skill-logo.module.scss";

type Props = {
  path: string;
  title: string;
};

export function HardSkillLogo({ path, title }: Props) {
  return (
    <Tooltip aria-label={title} content={title}>
      <svg
        className={styles["hard-skill-logo"]}
        name={title}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} fill="currentColor" />
      </svg>
    </Tooltip>
  );
}
