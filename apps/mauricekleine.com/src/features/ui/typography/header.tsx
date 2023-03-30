import { As } from "@mozza-ui/react";
import { VariantProps, clsxVariants } from "clsx-variants";
import { ReactNode } from "react";

import { textColorClassMap } from "../theme/text-color-utils";

const variants = clsxVariants({
  variants: {
    as: {
      h1: "bg-gradient-to-b from-slate-50 to-slate-400 bg-clip-text text-6xl font-black text-transparent sm:tracking-tight md:text-7xl",
      h2: "font-serif text-4xl font-bold tracking-normal text-slate-100 sm:text-5xl",
      h3: "font-serif text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl",
    },
    color: textColorClassMap,
  },
});

type Props = VariantProps<typeof variants, "as"> & {
  children: ReactNode;
};

export function Header({ children, ...props }: Props) {
  return (
    <As variants={variants} {...props}>
      {children}
    </As>
  );
}

export type { Props as HeaderProps };
