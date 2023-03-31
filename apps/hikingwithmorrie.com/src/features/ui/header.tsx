import { Header as HeaderBase, HeaderProps } from "@mozza-ui/react";
import { VariantProps, clsxVariants } from "clsx-variants";

import { textColorClassMap } from "./utils/text-color-utils";

const variants = clsxVariants({
  variants: {
    as: {
      h1: "font-serif text-5xl font-semibold sm:tracking-tight sm:text-6xl lg:text-7xl",
      h2: "font-serif text-2xl font-semibold tracking-normal sm:text-3xl",
      h3: "font-serif text-xl font-semibold",
    },
    color: textColorClassMap,
  },
});

type Props = VariantProps<typeof variants, "as"> & HeaderProps;

export function Header({ as, children, color }: Props) {
  const className = variants({ as, color });

  return (
    <HeaderBase as={as} className={className}>
      {children}
    </HeaderBase>
  );
}
