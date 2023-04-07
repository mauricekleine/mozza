import { Stack } from "@mozza-ui/react";
import { ComponentType, ReactNode } from "react";

import { LogoLink } from "~/ui";

type Props = {
  children: ReactNode | ReactNode[];
  logo: ComponentType<{ className: string }>;
  website: string;
};

export function CompanyRoot({ children, logo, website }: Props) {
  const Logo = logo;

  return (
    <Stack gap={2} items="start">
      <LogoLink href={website} logo={Logo} />

      <Stack gap={4}>{children}</Stack>
    </Stack>
  );
}
