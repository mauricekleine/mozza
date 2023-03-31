"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormProps, useForm as useFormBase } from "react-hook-form";
import { AnyZodObject, z } from "zod";

export function useForm<Values extends AnyZodObject>(
  args: UseFormProps<z.infer<Values>> & {
    schema: Values;
  }
) {
  return useFormBase({
    resolver: zodResolver(args.schema),
  });
}
