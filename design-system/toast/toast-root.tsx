import { Root as RootPrimitive, ToastProps } from "@radix-ui/react-toast";

export function ToastRoot({ children, ...props }: ToastProps) {
  return (
    <RootPrimitive
      className="space-y-1 rounded-md bg-black/90 p-4 shadow"
      {...props}
    >
      {children}
    </RootPrimitive>
  );
}
