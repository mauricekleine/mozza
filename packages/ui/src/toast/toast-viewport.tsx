"use client";

import { Viewport } from "@radix-ui/react-toast";

export function ToastViewport() {
  return (
    <Viewport
      style={{
        maxWidth: "100%",
        padding: "1.5rem",
        position: "fixed",
        right: 0,
        top: 0,
        zIndex: 50,
      }}
    />
  );
}
