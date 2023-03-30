"use client";

import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

import { Label } from "./label";

type Props = {
  children: ReactNode;
  label: ReactNode;
  name: string;
};

export function InputGroup({ children, label, name }: Props) {
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors?.[name];

  return (
    <div className="space-y-1">
      <Label color={error ? "red" : undefined} htmlFor={name}>
        {label}
      </Label>

      {children}

      {error && <p className="text-red text-sm">{error?.message as string}</p>}
    </div>
  );
}
