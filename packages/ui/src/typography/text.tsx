import { VariantProps, clsxVariants } from "clsx-variants";
import { ReactNode } from "react";

import { As } from "../system";

const variants = clsxVariants({
  defaultVariants: {
    family: "sans",
    size: "base",
  },
  variants: {
    family: {
      sans: "font-sans",
      serif: "font-serif",
    },
    size: {
      base: "text-base",
      sm: "text-sm",
      xs: "text-xs",
    },
    tracking: {
      normal: "tracking-normal",
      tight: "tracking-tight",
      tighter: "tracking-tighter",
    },
    transform: {
      capitalize: "capitalize",
      lowercase: "lowercase",
      uppercase: "uppercase",
    },
    weight: {
      bold: "font-bold",
      normal: "font-normal",
    },
  },
});

type ParagraphProps = {
  as?: "p";
  children: ReactNode;
};

type SpanProps = {
  as?: "span";
  children: string | string[];
};

type Props = VariantProps<typeof variants> & (ParagraphProps | SpanProps);

export function Text({
  as = "p",
  children,
  color,
  ...props
}: Props & { color?: `text-${string}` }) {
  return (
    <As as={as} className={color} variants={variants} {...props}>
      {children}
    </As>
  );
}

export { variants as textVariants };
export type { Props as TextProps };
