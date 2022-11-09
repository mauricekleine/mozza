import { ComponentProps, FormEventHandler, ReactNode, useState } from "react";

import { FormProvider } from "./form-context";

type IntrinsicFormProps = ComponentProps<"form">;

type Props = {
  action: Exclude<IntrinsicFormProps["action"], undefined>;
  children: ReactNode | ReactNode[];
  onSubmitted: () => void;
  transformFormData: (formData: FormData) => { [key: string]: unknown };
};

export function FormRoot({
  action,
  children,
  onSubmitted,
  transformFormData,
}: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = transformFormData(formData);

    setIsSubmitting(true);

    await fetch(action, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    onSubmitted();
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormProvider value={{ isSubmitting }}>{children}</FormProvider>
    </form>
  );
}
