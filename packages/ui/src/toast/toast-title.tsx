"use client";

import { Title as TitlePrimitive } from "@radix-ui/react-toast";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function ToastTitle({ children }: Props) {
  return <TitlePrimitive>{children}</TitlePrimitive>;
}
