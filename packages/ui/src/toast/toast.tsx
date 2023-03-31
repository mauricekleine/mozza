"use client";

import { Root, ToastProps } from "@radix-ui/react-toast";
import { AnimatePresence, motion } from "framer-motion";

import { Stack } from "../layout";

import { ToastClose } from "./toast-close";
import { ToastDescription } from "./toast-description";
import { ToastTitle } from "./toast-title";

type Props = {
  children: ToastProps["children"];
  className?: string;
  isOpen: boolean;
  onOpenChange: ToastProps["onOpenChange"];
};

function Toast({ children, className, isOpen, onOpenChange }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Root
          asChild
          className={className}
          onOpenChange={onOpenChange}
          open={isOpen}
        >
          <motion.div
            animate={{
              opacity: 1,
              translateX: 0,
            }}
            className="p-4"
            exit={{
              opacity: 0,
              transition: { duration: 0.1, ease: "easeIn" },
              translateX: "100%",
            }}
            initial={{ opacity: 0, translateX: "100%" }}
          >
            <Stack direction="horizontal" gap={4} items="start">
              {children}
            </Stack>
          </motion.div>
        </Root>
      )}
    </AnimatePresence>
  );
}

Toast.Close = ToastClose;
Toast.Description = ToastDescription;
Toast.Title = ToastTitle;

export { Toast };
