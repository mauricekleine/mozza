"use client";

import clsx from "clsx";
import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  defaultValue?: number | string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: ComponentProps<"input">["type"];
};

export function Input({ name, required, type = "text", ...props }: Props) {
  const {
    formState: { errors },
    register,
  } = useFormContext();
  const error = errors?.[name];

  return (
    <input
      className={clsx(
        "my-0.5 block w-full rounded px-3 py-2 text-base text-grey-dark shadow-sm",
        {
          "border-grey-light focus:border-green-dark focus:ring-green-dark":
            !error,
          "border-red focus:border-red focus:ring-red": error,
        }
      )}
      id={name}
      type={type}
      {...props}
      {...register(name, { required })}
    />
  );
}

export type { Props as InputProps };
