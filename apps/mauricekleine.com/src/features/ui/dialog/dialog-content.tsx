"use client";

import { Close, Content, Overlay, Portal } from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

import { X } from "../icon";

type Props = {
  children: ReactNode | ReactNode[];
  isOpen: boolean;
};

export function DialogContent({ children, isOpen }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Portal forceMount>
          <Overlay
            asChild
            className="fixed inset-0 z-30 grid items-center justify-center overflow-y-auto py-8 backdrop-blur-[1px] backdrop-brightness-[0.3]"
          >
            <motion.div
              animate={{
                opacity: 1,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.2, ease: "easeIn" },
              }}
              initial={{ opacity: 0 }}
            >
              <Content asChild className="mx-auto w-10/12 sm:w-1/2">
                <motion.div
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    transition: { duration: 0.2, ease: "easeIn" },
                  }}
                  initial={{ opacity: 0, scale: 0.95 }}
                >
                  <div className="flex justify-end">
                    <Close className="-mr-1 p-2">
                      <X />
                    </Close>
                  </div>

                  {children}
                </motion.div>
              </Content>
            </motion.div>
          </Overlay>
        </Portal>
      )}
    </AnimatePresence>
  );
}
