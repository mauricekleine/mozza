"use client";

import { createContext } from "react";

type FormContext = {
  isSubmitting: boolean;
};

export const FormContext = createContext<FormContext>({
  isSubmitting: false,
});

export const FormProvider = FormContext.Provider;
