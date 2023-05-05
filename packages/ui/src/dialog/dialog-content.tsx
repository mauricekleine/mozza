"use client";

import { Content, Overlay, Portal } from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
  className?: string;
  isOpen: boolean;
};

export function DialogContent({ children, className, isOpen }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Portal forceMount>
          <Overlay
            asChild
            style={{
              alignItems: "center",
              backdropFilter: "blur(1px) brightness(0.3)",
              display: "grid",
              inset: 0,
              justifyContent: "center",
              position: "fixed",
              zIndex: 30,
            }}
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
              <Content asChild className={className}>
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
