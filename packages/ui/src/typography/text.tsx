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

type ParagraphProps = {
  as?: "p";
  children: ReactNode;
};

type SpanProps = {
  as?: "span";
  children: string | string[];
};

type Props = VariantProps<typeof variants> & (ParagraphProps | SpanProps);

function isSpan(props: Props): props is SpanProps {
  return props.as === "span";
}

export function Text(props: Props & { color?: `text-${string}` }) {
  const className = variants(props.color ?? "", {
    family: props.family,
    size: props.size,
    tracking: props.tracking,
    transform: props.transform,
    weight: props.weight,
  });

  if (isSpan(props)) {
    return <span className={className}>{props.children}</span>;
  }

  return <p className={className}>{props.children}</p>;
}

export { variants as textVariants };
export type { Props as TextProps };
