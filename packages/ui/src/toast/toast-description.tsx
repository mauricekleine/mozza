"use client";

import { Description as DescriptionPrimitive } from "@radix-ui/react-toast";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function ToastDescription({ children }: Props) {
  return <DescriptionPrimitive>{children}</DescriptionPrimitive>;
}
