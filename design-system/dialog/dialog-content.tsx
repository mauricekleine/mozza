"use client";

import { Close, Content, Overlay, Portal } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { X } from "phosphor-react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

export function DialogContent({ children }: Props) {
  return (
    <Portal>
      <Overlay asChild className="fixed inset-0 z-30 bg-black/75">
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} />
      </Overlay>

      <Content
        asChild
        className="fixed top-1/2 left-1/2 z-30 w-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
          <div className="flex justify-end">
            <Close className="-mr-1 p-2">
              <X />
            </Close>
          </div>

          {children}
        </motion.div>
      </Content>
    </Portal>
  );
}
