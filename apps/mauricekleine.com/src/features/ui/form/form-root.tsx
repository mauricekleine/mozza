"use client";

import { ComponentProps, FormEventHandler, ReactNode, useState } from "react";

import { FormProvider } from "./form-context";

type IntrinsicFormProps = ComponentProps<"form">;

type Props = {
  action: Exclude<IntrinsicFormProps["action"], undefined>;
  children: ReactNode | ReactNode[];
  onSubmitted: ({ success }: { success: boolean }) => void;
};

export function FormRoot({ action, children, onSubmitted }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [verificationToken, setVerificationToken] = useState<string>();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const response = await fetch(action, {
      body: formData,
      method: "POST",
    });

    onSubmitted({
      success: response.status === 200,
    });

    setIsSubmitting(false);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <FormProvider
        value={{
          isDisabled: !verificationToken,
          isSubmitting,
          setVerificationToken,
          verificationToken,
        }}
      >
        {children}
      </FormProvider>
    </form>
  );
}
