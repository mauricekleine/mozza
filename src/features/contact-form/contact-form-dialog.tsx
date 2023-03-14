"use client";

import { ReactNode, useState } from "react";

import { ContactForm } from "@mk/contact-form";
import { Card, Dialog, Toast } from "@mk/design-system";

type Props = {
  children: ReactNode;
};

export function ContactFormDialog({ children }: Props) {
  const [hasErrors, setHasErrors] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);

  const handleSubmit = ({ success }: { success: boolean }) => {
    setIsToastOpen(true);

    if (success) {
      setHasErrors(false);
      setIsDialogOpen(false);
    } else {
      setHasErrors(true);
    }
  };

  return (
    <>
      <Dialog
        isOpen={isDialogOpen}
        onOpenChange={(open) => setIsDialogOpen(open)}
      >
        <Dialog.Trigger asChild>{children}</Dialog.Trigger>

        <Dialog.Content isOpen={isDialogOpen}>
          <Card>
            <Dialog.Title>Contact me</Dialog.Title>

            <Dialog.Description>
              Please leave your details below and I&apos;ll get back to you as
              soon as possible. I aim to reply within 12 hours.
            </Dialog.Description>

            <ContactForm onSubmitted={handleSubmit} />
          </Card>
        </Dialog.Content>
      </Dialog>

      <Toast
        isOpen={isToastOpen}
        onOpenChange={(open) => {
          setIsToastOpen(open);
        }}
        variant={hasErrors ? "error" : "success"}
      >
        <Toast.Title>
          {hasErrors ? "Something went wrong" : "Inquiry submitted"}
        </Toast.Title>

        <Toast.Description>
          {hasErrors
            ? "Please try again"
            : "Your inquiry was received and will be answered as soon as possible"}
        </Toast.Description>
      </Toast>
    </>
  );
}
