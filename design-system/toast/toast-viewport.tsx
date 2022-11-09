"use client";

import { Viewport as ViewportPrimitive } from "@radix-ui/react-toast";

export function ToastViewport() {
  return (
    <ViewportPrimitive className="fixed top-0 right-0 z-50 max-w-full p-6" />
  );
}
