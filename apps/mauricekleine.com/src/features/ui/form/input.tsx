import { ComponentProps } from "react";

import styles from "./input.module.scss";

type StringLiteral<T> = T extends string
  ? string extends T
    ? never
    : T
  : never;

type Props = {
  autoFocus?: boolean;
  defaultValue?: number | string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: StringLiteral<ComponentProps<"input">["type"]>;
};

export function Input({ name, ...props }: Props) {
  return <input className={styles.input} id={name} name={name} {...props} />;
}
