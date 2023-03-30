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
  color,
  ...props
}: Props & { color?: `text-${string}` }) {
  const className = variants(color ?? "", props);

  switch (as) {
    case "span": {
      return <span className={className}>{children}</span>;
    }

    default: {
      return <p className={className}>{children}</p>;
    }
  }
}

export { variants as textVariants };
export type { Props as TextProps };
