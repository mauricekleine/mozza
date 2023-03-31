"use client";

import { Confetti, SmileyXEyes, X } from "@mozza-icons/react";
import { Dialog, Stack, Toast } from "@mozza-ui/react";
import clsx from "clsx";
import { ReactNode, useState } from "react";

import { ContactForm } from "~/contact-form";
import { Card, Text } from "~/ui";

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
          <div className="flex justify-end">
            <Dialog.Close className="-mr-1 p-2">
              <X />
            </Dialog.Close>
          </div>

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
        className={clsx(
          "pointer-events-auto w-full max-w-md overflow-hidden rounded-lg border border-b-4 border-slate-200/10 bg-black shadow-lg",
          { "border-b-red-900": hasErrors },
          { "border-b-green-900": !hasErrors }
        )}
        isOpen={isToastOpen}
        onOpenChange={(open) => {
          setIsToastOpen(open);
        }}
      >
        <div className={clsx("my-auto flex items-center rounded-full")}>
          {hasErrors ? (
            <SmileyXEyes className="h-8 w-8 text-red-800" />
          ) : (
            <Confetti className="h-8 w-8 text-green-800" />
          )}
        </div>

        <Stack gap={1}>
          <Toast.Title>
            <Text weight="bold">
              {hasErrors ? "Something went wrong" : "Inquiry submitted"}
            </Text>
          </Toast.Title>

          <Toast.Description>
            <Text>
              {hasErrors
                ? "Please try again"
                : "Your inquiry was received and will be answered as soon as possible"}
            </Text>
          </Toast.Description>
        </Stack>

        <div className="flex-shrink-0">
          <Toast.Close className="p-1">
            <X className="h-3 w-3" />
          </Toast.Close>
        </div>
      </Toast>
    </>
  );
}
