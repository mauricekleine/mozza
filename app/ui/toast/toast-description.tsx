import { Description as DescriptionPrimitive } from "@radix-ui/react-toast";

import { Text } from "../typography";

type Props = {
  children: string;
};

export function ToastDescription({ children }: Props) {
  return (
    <DescriptionPrimitive asChild>
      <Text as="p">{children}</Text>
    </DescriptionPrimitive>
  );
}
