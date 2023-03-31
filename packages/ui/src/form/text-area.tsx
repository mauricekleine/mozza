"use client";

import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type Props<Values extends FieldValues = FieldValues> = {
  autoFocus?: boolean;
  defaultValue?: number | string;
  maxLength?: number;
  minLength?: number;
  name: Path<Values>;
  placeholder?: string;
  register: UseFormRegister<Values>;
  required?: boolean;
  rows?: number;
};

export function TextArea<Values extends FieldValues = FieldValues>({
  maxLength,
  minLength,
  name,
  register,
  required,
  ...props
}: Props<Values> & {
  className?: string;
}) {
  return (
    <textarea
      id={name}
      maxLength={maxLength}
      minLength={minLength}
      {...props}
      {...register(name, { maxLength, minLength, required })}
    />
  );
}

export type { Props as TextAreaProps };
