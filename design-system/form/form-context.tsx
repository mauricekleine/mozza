"use client";

import { createContext } from "react";

type FormContext = {
  isDisabled?: boolean;
  isSubmitting: boolean;
  setVerificationToken: (token: string) => void;
  verificationToken?: string;
};

export const FormContext = createContext<FormContext>({
  isDisabled: false,
  isSubmitting: false,
  setVerificationToken: () => {},
});

export const FormProvider = FormContext.Provider;
