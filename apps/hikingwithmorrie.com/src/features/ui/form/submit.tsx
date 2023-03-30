"use client";

import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";

import { Button } from "../button/button";

type Props = Omit<ComponentProps<typeof Button>, "as" | "onClick" | "type">;

export function Submit({ children, isDisabled, isLoading, ...props }: Props) {
  const {
    formState: { errors, isSubmitting },
  } = useFormContext();

  return (
    <Button
      isDisabled={isDisabled || (errors && Object.keys(errors).length > 0)}
      isLoading={isLoading || isSubmitting}
      type="submit"
      {...props}
    >
      {children}
    </Button>
  );
}
