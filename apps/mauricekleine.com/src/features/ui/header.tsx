import { Header as HeaderBase } from "@mozza-ui/react";
import { VariantProps, clsxVariants } from "clsx-variants";
import { ReactNode } from "react";

const variants = clsxVariants({
  variants: {
    as: {
      h1: "font-serif text-white text-6xl font-semibold text-transparent sm:tracking-tight md:text-8xl",
      h2: "font-serif text-4xl font-semibold tracking-normal text-slate-100 sm:text-5xl",
      h3: "font-serif text-2xl text-grey-light font-semibold tracking-tight",
      h4: "text-2xl text-grey-light font-semibold tracking-tight",
    },
  },
});

type Props = VariantProps<typeof variants, "as"> & {
  children: ReactNode;
};

export function Header({ as, children }: Props) {
  const className = variants({ as });

  return (
    <HeaderBase as={as} className={className}>
      {children}
    </HeaderBase>
  );
}

export type { Props as HeaderProps };
