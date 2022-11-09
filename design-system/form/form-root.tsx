"use client";

import { ComponentProps, FormEventHandler, ReactNode, useState } from "react";

import { FormProvider } from "./form-context";

type IntrinsicFormProps = ComponentProps<"form">;

type Props = {
  action: Exclude<IntrinsicFormProps["action"], undefined>;
  children: ReactNode | ReactNode[];
  onSubmitted: ({ success }: { success: boolean }) => void;
  transformFormData: (formData: FormData) => { [key: string]: unknown };
};

export function FormRoot({
  action,
  children,
  onSubmitted,
  transformFormData,
}: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [verificationToken, setVerificationToken] = useState<string>();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = transformFormData(formData);
    data["cf-turnstile-token"] = verificationToken;

    setIsSubmitting(true);

    const response = await fetch(action, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
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
