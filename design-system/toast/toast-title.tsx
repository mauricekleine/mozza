import { Title as TitlePrimitive } from "@radix-ui/react-toast";

import { Text } from "../typography";

type Props = {
  children: string;
};

export function ToastTitle({ children }: Props) {
  return (
    <TitlePrimitive asChild>
      <Text as="p" weight="bold">
        {children}
      </Text>
    </TitlePrimitive>
  );
}
