import { ReactNode } from "react";

import styles from "./input-group.module.css";

type Props = {
  children: ReactNode | ReactNode[];
};

export function InputGroup({ children }: Props) {
  return (
    <div className={styles["input-group"]} role="group">
      {children}
    </div>
  );
}
