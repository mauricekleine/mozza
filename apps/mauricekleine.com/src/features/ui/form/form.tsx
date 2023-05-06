import { ComponentProps, ReactNode } from "react";

// eslint-disable-next-line no-restricted-imports
import { Box } from "../layout";

type Props = {
  action: ComponentProps<"form">["action"];
  children: ReactNode;
};

export function Form({ action, children }: Props) {
  return (
    <Box action={action} as="form" gap={4}>
      {children}
    </Box>
  );
}
