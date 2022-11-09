import { DialogProps, Root as RootPrimitive } from "@radix-ui/react-dialog";

export function DialogRoot({
  children,
  isOpen,
  ...props
}: Omit<DialogProps, "open"> & { isOpen?: boolean }) {
  return (
    <RootPrimitive open={isOpen} {...props}>
      {children}
    </RootPrimitive>
  );
}
