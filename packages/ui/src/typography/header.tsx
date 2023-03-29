import { VariantProps, clsxVariants } from "clsx-variants";
import { ReactNode } from "react";

const variants = clsxVariants<{ as: { [key in "h1" | "h2" | "h3"]: string } }>({
  variants: {
    as: {
      h1: "font-serif text-5xl font-semibold sm:tracking-tight sm:text-6xl lg:text-7xl",
      h2: "font-serif text-2xl font-semibold tracking-normal sm:text-3xl",
      h3: "font-serif text-xl font-semibold",
    },
  },
});

type Props = Required<VariantProps<typeof variants>> & {
  children: ReactNode;
};

export function Header({
  as,
  children,
  className: classNameProp = "",
}: Props & { className?: string }) {
  const Element = as;
  const className = variants(classNameProp, { as });

  return <Element className={className}>{children}</Element>;
}

export type { Props as HeaderProps };
