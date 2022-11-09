"use client";

import { DialogClose } from "./dialog-close";
import { DialogContent } from "./dialog-content";
import { DialogDescription } from "./dialog-description";
import { DialogRoot } from "./dialog-root";
import { DialogTitle } from "./dialog-title";
import { DialogTrigger } from "./dialog-trigger";

export const Dialog = Object.assign(DialogRoot, {
  Close: DialogClose,
  Content: DialogContent,
  Description: DialogDescription,
  Title: DialogTitle,
  Trigger: DialogTrigger,
});
