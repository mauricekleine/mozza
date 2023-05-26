import { Icon } from "@mozza-icons/react";

import styles from "./card-icon.module.scss";

type Props = {
  icon: Icon;
};

export function CardIcon({ icon }: Props) {
  const Icon = icon;

  return (
    <div className={styles["card-icon"]}>
      <Icon />
    </div>
  );
}
