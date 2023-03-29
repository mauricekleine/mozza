import { clsx } from "clsx";
import { ReactNode } from "react";

import { Color, getTextColorClassName } from "../theme/color-utils";

type HeaderElement = "h1" | "h2" | "h3";

const headerVariants: { [key in HeaderElement]: string } = {
  h1: "font-serif text-5xl font-semibold sm:tracking-tight sm:text-6xl lg:text-7xl",
  h2: "font-serif text-2xl font-semibold tracking-normal sm:text-3xl",
  h3: "font-serif text-xl font-semibold",
};

type Props = {
  as: HeaderElement;
  children: ReactNode;
  color?: Color;
};

export function Header({ as, children, color }: Props) {
  const Element = as;
  const textColorClassName = getTextColorClassName(color);

  return (
    <Element className={clsx(textColorClassName, headerVariants[as])}>
      {children}
    </Element>
  );
}
