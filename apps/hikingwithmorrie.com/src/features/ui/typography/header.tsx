import { Header as HeaderBase, HeaderProps } from "@mozza-ui/react";

import { Color, textColorVariants } from "../theme/color-utils";

type Props = HeaderProps & {
  color?: Color;
};

export function Header({ color, ...props }: Props) {
  const className = textColorVariants({ color });

  return <HeaderBase className={className} {...props} />;
}
