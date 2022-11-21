import { Heading, Stack } from "~/design-system";
import { Icon } from "~/design-system/icon";

type Props = {
  children: string;
  icon: Icon;
};

export function ServicesCardTitle({ children, icon }: Props) {
  const Icon = icon;

  return (
    <Stack alignItems="center" direction="horizontal" gap={2}>
      <Icon className="h-8 w-8 text-slate-200" />

      <Heading as="h3">{children}</Heading>
    </Stack>
  );
}
