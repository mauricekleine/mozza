"use client";

import {
  Close as ClosePrimitive,
  Title as TitlePrimitive,
} from "@radix-ui/react-toast";
import { X } from "phosphor-react";

import { Stack } from "../layout";
import { Text } from "../typography";

type Props = {
  children: string;
};

export function ToastTitle({ children }: Props) {
  return (
    <Stack alignItems="center" direction="horizontal" justifyContent="between">
      <TitlePrimitive asChild>
        <Text as="p" weight="bold">
          {children}
        </Text>
      </TitlePrimitive>

      <ClosePrimitive>
        <X className="h-3 w-3" />
      </ClosePrimitive>
    </Stack>
  );
}
