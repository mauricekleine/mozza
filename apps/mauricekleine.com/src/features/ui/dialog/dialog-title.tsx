"use client";

import { Title as TitlePrimitive } from "@radix-ui/react-dialog";

import { Header } from "../typography";

type Props = {
  children: string;
};

export function DialogTitle({ children }: Props) {
  return (
    <TitlePrimitive>
      <Header as="h3">{children}</Header>
    </TitlePrimitive>
  );
}
