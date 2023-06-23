"use client";

import {
  AccordionMultipleProps,
  AccordionSingleProps,
  Root,
} from "@radix-ui/react-accordion";

import { AccordionItem } from "./accordion-item";
import { AccordionItemContent } from "./accordion-item-content";
import { AccordionItemHeader } from "./accordion-item-header";
import { AccordionItemTrigger } from "./accordion-item-trigger";

type Props = AccordionMultipleProps | AccordionSingleProps;

function Accordion({ children, ...props }: Props) {
  return <Root {...props}>{children}</Root>;
}

Accordion.Item = AccordionItem;
Accordion.ItemContent = AccordionItemContent;
Accordion.ItemHeader = AccordionItemHeader;
Accordion.ItemTrigger = AccordionItemTrigger;

export { Accordion };
export type AccordionProps =
  | Omit<AccordionMultipleProps, "className">
  | Omit<AccordionSingleProps, "className">;
