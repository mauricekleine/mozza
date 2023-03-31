"use client";

import { ReactNode } from "react";
import { DeepPartial, FormProvider, UseFormReturn } from "react-hook-form";
import { AnyZodObject, z } from "zod";

type Props<Values extends AnyZodObject> = {
  children: ReactNode;
  initialValues?: DeepPartial<z.infer<Values>>;
  methods: UseFormReturn<z.infer<Values>>;
  onSubmit: (data: z.infer<Values>, { reset }: { reset: () => void }) => void;
};

export function Form<Values extends AnyZodObject>({
  children,
  methods,
  onSubmit,
}: Props<Values>) {
  const handleSubmit = methods.handleSubmit(async (data) => {
    await onSubmit(data, { reset: methods.reset });
  });

  return (
    <FormProvider {...methods}>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {children}
      </form>
    </FormProvider>
  );
}
