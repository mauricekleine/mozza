import { Label as BaseLabel } from "@mozza-ui/react";
import { ReactNode } from "react";

import { Color, textColorVariants } from "../theme/text-color-utils";

type Props = {
  children: ReactNode;
  color?: Color;
  htmlFor: string;
};

export function Label({ children, color, htmlFor }: Props) {
  const textColorClassName = textColorVariants({ color });

  return (
    <BaseLabel
      color={textColorClassName}
      htmlFor={htmlFor}
      size="xs"
      tracking="tight"
      weight="bold"
    >
      {children}
    </BaseLabel>
  );
}
