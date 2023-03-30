import { Stack } from "@mozza-ui/react";

import { Heading } from "~/ui";
import { Icon } from "~/ui/icon";

type Props = {
  children: string;
  icon: Icon;
};

export function ServicesCardTitle({ children, icon }: Props) {
  const Icon = icon;

  return (
    <Stack direction="horizontal" gap={2} items="center">
      <Icon className="h-8 w-8 text-slate-200" />

      <Heading as="h3">{children}</Heading>
    </Stack>
  );
}
