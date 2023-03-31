"use client";

import { DialogProps, Root } from "@radix-ui/react-dialog";

import { DialogClose } from "./dialog-close";
import { DialogContent } from "./dialog-content";
import { DialogDescription } from "./dialog-description";
import { DialogTitle } from "./dialog-title";
import { DialogTrigger } from "./dialog-trigger";

function Dialog({
  children,
  isOpen,
  ...props
}: Omit<DialogProps, "open"> & { isOpen?: boolean }) {
  return (
    <Root open={isOpen} {...props}>
      {children}
    </Root>
  );
}

Dialog.Close = DialogClose;
Dialog.Content = DialogContent;
Dialog.Description = DialogDescription;
Dialog.Title = DialogTitle;
Dialog.Trigger = DialogTrigger;

export { Dialog };
