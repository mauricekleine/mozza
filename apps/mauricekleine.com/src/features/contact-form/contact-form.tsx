"use client";

import { Form, Stack, useForm } from "@mozza-ui/react";
import { useState } from "react";
import { z } from "zod";

import {
  Button,
  FormProtection,
  Input,
  InputGroup,
  Label,
  TextArea,
} from "~/ui";

type Props = {
  onSubmitted: ({ success }: { success: boolean }) => void;
};

export function ContactForm({ onSubmitted }: Props) {
  const methods = useForm({
    schema: z.object({
      email: z.string().email(),
      inquiry: z.string().min(3).max(496),
      phone: z.string().optional(),
    }),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [verificationToken, setVerificationToken] = useState<string | null>();

  const isDisabled = !verificationToken;

  return (
    <Form
      methods={methods}
      onSubmit={async (data, { reset }) => {
        setIsSubmitting(true);

        try {
          const result = await fetch("/contact", {
            body: JSON.stringify({ ...data, verificationToken }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });

          if (result.ok) {
            onSubmitted({
              success: true,
            });
          } else {
            onSubmitted({
              success: false,
            });
          }
        } catch {
          onSubmitted({
            success: false,
          });
        }

        reset();
        setIsSubmitting(false);
      }}
    >
      <InputGroup>
        <Label htmlFor="email">Email *</Label>

        <Input
          autoFocus
          name="email"
          placeholder="Email"
          register={methods.register}
          required
          type="email"
        />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="phone">Phone number</Label>

        <Input
          name="phone"
          placeholder="Phone number"
          register={methods.register}
          type="text"
        />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="inquiry">Your inquiry *</Label>

        <TextArea
          maxLength={496}
          minLength={3}
          name="inquiry"
          placeholder="Inquiry"
          register={methods.register}
          required
        />
      </InputGroup>

      <Stack direction="horizontal" justify="end">
        <Button isDisabled={isDisabled} isLoading={isSubmitting} type="submit">
          Submit
        </Button>
      </Stack>

      <div className="border-t border-slate-200/10 pt-6">
        <InputGroup>
          <div className="text-center">
            <Label htmlFor="">Spam protection</Label>
          </div>

          <FormProtection setVerificationToken={setVerificationToken} />
        </InputGroup>
      </div>
    </Form>
  );
}
