import { ToastDescription } from "./toast-description";
import { ToastRoot } from "./toast-root";
import { ToastTitle } from "./toast-title";

export const Toast = Object.assign(ToastRoot, {
  Description: ToastDescription,
  Title: ToastTitle,
});

export { ToastProvider } from "./toast-provider";
export { ToastViewport } from "./toast-viewport";
