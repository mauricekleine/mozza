"use client";

import { Root, ToastProps } from "@radix-ui/react-toast";
import { AnimatePresence, motion } from "framer-motion";

import { ToastClose } from "./toast-close";
import { ToastDescription } from "./toast-description";
import { ToastTitle } from "./toast-title";

type Props = {
  children: ToastProps["children"];
  className?: string;
  isOpen: boolean;
  onOpenChange: ToastProps["onOpenChange"];
};

function Toast({ children, isOpen, ...props }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Root asChild open={isOpen} {...props}>
          <motion.div
            animate={{
              opacity: 1,
              translateX: 0,
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.1, ease: "easeIn" },
              translateX: "100%",
            }}
            initial={{ opacity: 0, translateX: "100%" }}
          >
            {children}
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
