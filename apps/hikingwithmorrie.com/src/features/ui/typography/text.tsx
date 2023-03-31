import { Text as TextBase, TextProps } from "@mozza-ui/react";

import { Color, textColorVariants } from "../theme/text-color-utils";

type Props = TextProps & {
  color?: Color;
};

export function Text({ color, ...props }: Props) {
  const colorClass = textColorVariants({ color });

  return <TextBase className={colorClass} {...props} />;
}
