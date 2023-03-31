"use client";

import { VariantProps } from "clsx-variants";
import { ReactNode } from "react";

import { textVariants } from "../typography";

type Props = VariantProps<typeof textVariants> & {
  children: ReactNode;
  htmlFor: string;
};

export function Label({
  children,
  className: classNameProp,
  family,
  htmlFor,
  size,
  tracking,
  transform,
  weight,
}: Props & { className?: string }) {
  const className = textVariants(classNameProp, {
    family,
    size,
    tracking,
    transform,
    weight,
  });

  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export type { Props as LabelProps };
