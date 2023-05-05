"use client";

import { useState } from "react";

import styles from "./text-area.module.scss";

type Props = {
  autoFocus?: boolean;
  defaultValue?: number | string;
  maxLength?: number;
  minLength?: number;
  name: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
};

export function TextArea({ name, ...props }: Props) {
  const [value, setValue] = useState<string | undefined>();

  return (
    <div className={styles["text-area"]}>
      <textarea
        id={name}
        name={name}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        {...props}
        value={value}
      />

      {props.maxLength && props.maxLength > 0 ? (
        <p>
          <span>{value?.length}</span>

          <span>/</span>

          <span>{props.maxLength}</span>
        </p>
      ) : null}
    </div>
  );
}
