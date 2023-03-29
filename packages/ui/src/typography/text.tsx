import { VariantProps, clsxVariants } from "clsx-variants";
import { ReactNode } from "react";

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
      xs: "text-xs",
      sm: "text-sm",
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

type Props = VariantProps<typeof variants> &
  (
    | {
        as?: "p";
        children: ReactNode;
      }
    | {
        as?: "span";
        children: string | string[];
      }
  );

export function Text({
  as,
  children,
  className: classNameProp = "",
  ...props
}: Props & { className?: string }) {
  const className = variants(classNameProp, props);

  switch (as) {
    case "span": {
      return <span className={className}>{children}</span>;
    }

    default: {
      return <p className={className}>{children}</p>;
    }
  }
}

export type { Props as TextProps };
