"use client";

import { Title as TitlePrimitive } from "@radix-ui/react-toast";

import { Text } from "../typography";

type Props = {
  children: string;
};

export function ToastTitle({ children }: Props) {
  return (
    <TitlePrimitive>
      <Text weight="bold">{children}</Text>
    </TitlePrimitive>
  );
}
