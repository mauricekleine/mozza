"use client";

import { Confetti, SmileyXEyes, X } from "@mozza-icons/react";
import { CircleNotch } from "@mozza-icons/react";
import { Dialog, Toast } from "@mozza-ui/react";
import { ReactNode, useState } from "react";

import { Button } from "~/ui/button";
import { Card } from "~/ui/card";
import {
  Form,
  FormProtection,
  Input,
  InputGroup,
  Label,
  TextArea,
} from "~/ui/form";
import { Icon } from "~/ui/icon";
import { Box } from "~/ui/layout";
import { Text } from "~/ui/typography";

import { submitContactForm } from "./contact-form-action";
import styles from "./contact-form-dialog.module.scss";

type Props = {
  children: ReactNode;
};

export function ContactFormDialog({ children }: Props) {
  const [status, setStatus] = useState<
    "error" | "idle" | "pending" | "success"
  >("idle");
  const [previousStatus, setPreviousStatus] = useState(status);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);

  if (status !== previousStatus) {
    setIsDialogOpen(false);
    setIsToastOpen(true);
    setPreviousStatus(status);
  }

  const isPending = status === "pending";
  const hasErrors = status === "error";

  return (
    <>
      <Dialog
        isOpen={isDialogOpen}
        onOpenChange={(open) => setIsDialogOpen(open)}
      >
        <Dialog.Trigger asChild>{children}</Dialog.Trigger>

        <Dialog.Content className={styles.dialog} isOpen={isDialogOpen}>
          <Box direction="horizontal" justifyContent="end">
            <Dialog.Close className={styles["dialog-close"]}>
              <Icon icon={X} size="sm" />
            </Dialog.Close>
          </Box>

          <Card gap={8} variant="neon">
            <Dialog.Title>Contact me</Dialog.Title>

            <Dialog.Description>
              Please leave your details below and I&apos;ll get back to you as
              soon as possible. I aim to reply within 12 hours.
            </Dialog.Description>

            <Form
              action={async (formData) => {
                setStatus("pending");

                const response = await submitContactForm(formData);

                if (response.status === 200) {
                  setStatus("success");
                } else {
                  setStatus("error");
                }
              }}
            >
              <InputGroup>
                <Label htmlFor="email">Email *</Label>

                <Input
                  autoFocus
                  name="email"
                  placeholder="Email"
                  required
                  type="email"
                />
              </InputGroup>

              <InputGroup>
                <Label htmlFor="phone">Phone number</Label>

                <Input name="phone" placeholder="Phone number" type="text" />
              </InputGroup>

              <InputGroup>
                <Label htmlFor="inquiry">Your inquiry *</Label>

                <TextArea
                  maxLength={496}
                  minLength={3}
                  name="inquiry"
                  placeholder="Inquiry"
                  required
                />
              </InputGroup>

              <Box direction="horizontal" justifyContent="end">
                <Button
                  isDisabled={isPending}
                  type="submit"
                  variant="secondary"
                >
                  {isPending ? (
                    <Icon animation="spin" icon={CircleNotch} size="sm" />
                  ) : null}

                  <span>Submit</span>
                </Button>
              </Box>

              <div className={styles["form-protection-group"]}>
                <InputGroup>
                  <Label htmlFor="">Spam protection</Label>

                  <FormProtection />
                </InputGroup>
              </div>
            </Form>
          </Card>
        </Dialog.Content>
      </Dialog>

      <Toast
        className={styles.toast}
        data-invalid={hasErrors}
        isOpen={isToastOpen}
        onOpenChange={(open) => {
          setIsToastOpen(open);
        }}
      >
        <Box alignItems="start" direction="horizontal" gap={4}>
          <div>
            {hasErrors ? (
              <Icon color="red.800" icon={SmileyXEyes} />
            ) : (
              <Icon color="green.800" icon={Confetti} />
            )}
          </div>

          <Box gap={1}>
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
          </Box>

          <div className={styles["toast-close"]}>
            <Toast.Close>
              <Icon icon={X} size="xs" />
            </Toast.Close>
          </div>
        </Box>
      </Toast>
    </>
  );
}
