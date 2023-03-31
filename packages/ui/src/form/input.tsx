"use client";

import { ComponentProps } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type StringLiteral<T> = T extends string
  ? string extends T
    ? never
    : T
  : never;

type Props<Values extends FieldValues = FieldValues> = {
  autoFocus?: boolean;
  defaultValue?: number | string;
  name: Path<Values>;
  placeholder?: string;
  register: UseFormRegister<Values>;
  required?: boolean;
  type?: StringLiteral<ComponentProps<"input">["type"]>;
};

export function Input<Values extends FieldValues = FieldValues>({
  name,
  register,
  required,
  type = "text",
  ...props
}: Props<Values> & {
  className?: string;
}) {
  return (
    <input
      id={name}
      required={required}
      type={type}
      {...props}
      {...register(name, { required })}
    />
  );
}

export type { Props as InputProps };
