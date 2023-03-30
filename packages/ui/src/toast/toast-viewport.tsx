"use client";

import { Viewport as ViewportPrimitive } from "@radix-ui/react-toast";

export function ToastViewport() {
  return (
    <ViewportPrimitive className="fixed right-0 top-0 z-50 max-w-full p-6" />
  );
}
