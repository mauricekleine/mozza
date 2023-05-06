import { ElementType } from "react";

import { Box, BoxProps } from "./box";
import styles from "./container.module.scss";

type Props<As extends ElementType = "div"> = BoxProps<As> & {
  width: "sm" | "md" | "lg";
};

export function Container<As extends ElementType = "div">({
  children,
  className,
  width,
  ...rest
}: Props<As>) {
  return (
    <Box
      className={
        className ? `${styles.container} ${className}` : styles.container
      }
      data-width={width}
      {...(rest as BoxProps<As>)}
    >
      {children}
    </Box>
  );
}

export type { Props as ContainerProps };
