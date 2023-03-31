"use client";

import { Stack } from "@mozza-ui/react";

import { Button } from "~/ui";

import { useForm } from "./use-form";

type Props = {
  children: string;
};

export function FormButton({ children }: Props) {
  const { isDisabled, isSubmitting } = useForm();

  return (
    <Stack direction="horizontal" justify="end">
      <Button isDisabled={isDisabled} isLoading={isSubmitting} type="submit">
        {children}
      </Button>
    </Stack>
  );
}
