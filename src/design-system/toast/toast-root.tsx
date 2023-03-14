"use client";

import {
  Close as ClosePrimitive,
  Root as RootPrimitive,
  ToastProps,
} from "@radix-ui/react-toast";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";

import { Confetti, SmileyXEyes, X } from "../icon";
import { Stack } from "../layout";

type Props = {
  children: ToastProps["children"];
  isOpen: boolean;
  onOpenChange: ToastProps["onOpenChange"];
  variant: "error" | "success";
};

export function ToastRoot({ children, isOpen, onOpenChange, variant }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <RootPrimitive
          asChild
          className={clsx(
            "pointer-events-auto w-full max-w-md overflow-hidden rounded-lg border border-b-4 border-slate-200/10 bg-black shadow-lg",
            { "border-b-red-900": variant === "error" },
            { "border-b-green-900": variant === "success" }
          )}
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
            <Stack alignItems="start" direction="horizontal" gap={4}>
              <div className={clsx("my-auto flex items-center rounded-full")}>
                {variant === "success" ? (
                  <Confetti className="h-8 w-8 text-green-800" />
                ) : (
                  <SmileyXEyes className="h-8 w-8 text-red-800" />
                )}
              </div>

              <Stack gap={1}>{children}</Stack>

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
