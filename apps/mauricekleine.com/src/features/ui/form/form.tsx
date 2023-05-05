"use client";

import { ComponentProps, ReactNode } from "react";

import styles from "./form.module.css";

type Props = {
  action: ComponentProps<"form">["action"];
  children: ReactNode;
};

export function Form({ action, children }: Props) {
  return (
    <form action={action} className={styles.form}>
      {children}
    </form>
  );
}
