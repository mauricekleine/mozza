import {
  Accordion as AccordionPrimitive,
  AccordionProps,
} from "@mozza-ui/react";

import styles from "./accordion.module.scss";

export function Accordion({ children, ...props }: AccordionProps) {
  return (
    <AccordionPrimitive className={styles.accordion} {...props}>
      {children}
    </AccordionPrimitive>
  );
}
