"use client";

import { useContext } from "react";

import { FormContext } from "./form-context";

export const useForm = () => {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("useForm must be used within a FormContext");
  }

  return context;
};
