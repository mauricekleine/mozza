"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { DeepPartial, FormProvider, useForm } from "react-hook-form";
import { AnyZodObject, z } from "zod";

type Props<Values extends AnyZodObject> = {
  children: ReactNode;
  initialValues?: DeepPartial<z.infer<Values>>;
  onSubmit: (data: z.infer<Values>, { reset }: { reset: () => void }) => void;
  schema: Values;
};

export function Form<Values extends AnyZodObject>({
  children,
  initialValues,
  onSubmit,
  schema,
}: Props<Values>) {
  const methods = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(schema),
  });

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
