import { VariantProps } from "clsx-variants";
import { ReactNode } from "react";

import { textVariants } from "../typography";

type Props = VariantProps<typeof textVariants> & {
  children: ReactNode;
  htmlFor: string;
};

export function Label({
  children,
  color,
  htmlFor,
  ...props
}: Props & { color?: `text-${string}` }) {
  const className = textVariants(color ?? "", props);

  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export type { Props as LabelProps };
