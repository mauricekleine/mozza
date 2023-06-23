"use client";

import { CaretDown } from "@mozza-icons/react";
import { Accordion } from "@mozza-ui/react";
import { ReactNode } from "react";

// eslint-disable-next-line no-restricted-imports
import { Icon } from "../icon";

import styles from "./accordion-item.module.scss";

type Props = {
  children: ReactNode;
  header: string;
  value: string;
};

export function AccordionItem({ children, header, value }: Props) {
  return (
    <Accordion.Item className={styles["accordion-item"]} value={value}>
      <Accordion.ItemTrigger>
        <span>{header}</span>

        <Icon icon={CaretDown} size="sm" />
      </Accordion.ItemTrigger>

      <Accordion.ItemContent asChild>{children}</Accordion.ItemContent>
    </Accordion.Item>
  );
}
