import { Tooltip as TooltipPrimitive, TooltipProps } from "@mozza-ui/react";

import styles from "./tooltip.module.scss";

type Props = TooltipProps;

export function Tooltip({ children, ...props }: Props) {
  return (
    <TooltipPrimitive className={styles["tooltip"]} {...props}>
      {children}
    </TooltipPrimitive>
  );
}
