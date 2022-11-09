import { Root as RootPrimitive, ToastProps } from "@radix-ui/react-toast";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle } from "phosphor-react";

import { Stack } from "../layout";

type Props = {
  children: ToastProps["children"];
  isOpen: boolean;
  onOpenChange: ToastProps["onOpenChange"];
};

export function ToastRoot({ children, isOpen, onOpenChange }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <RootPrimitive
          asChild
          className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5"
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
            <Stack direction="horizontal" gap={2}>
              <div>
                <CheckCircle className="h-6 w-6" />
              </div>

              <Stack gap={1}>{children}</Stack>
            </Stack>
          </motion.div>
        </RootPrimitive>
      )}
    </AnimatePresence>
  );
}
