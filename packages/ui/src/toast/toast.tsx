"use client";

import { X } from "@mozza-icons/react";
import {
  Close as ClosePrimitive,
  Root as RootPrimitive,
  ToastProps,
} from "@radix-ui/react-toast";
import { AnimatePresence, motion } from "framer-motion";

import { Stack } from "../layout";

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
        <RootPrimitive
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

              <div className="flex-shrink-0">
                <ClosePrimitive className="p-1">
                  <X className="h-3 w-3" />
                </ClosePrimitive>
              </div>
            </Stack>
          </motion.div>
        </RootPrimitive>
      )}
    </AnimatePresence>
  );
}

Toast.Description = ToastDescription;
Toast.Title = ToastTitle;

export { Toast };
