import { ComponentType, ReactNode } from "react";

import { Stack } from "@mk/design-system";
import { LogoLink } from "@mk/marketing/client-logos";

type Props = {
  children: ReactNode | ReactNode[];
  logo: ComponentType<{ className: string }>;
  website: string;
};

export function CompanyRoot({ children, logo, website }: Props) {
  const Logo = logo;

  return (
    <Stack alignItems="start" gap={2}>
      <LogoLink href={website} logo={Logo} />

      <Stack gap={4}>{children}</Stack>
    </Stack>
  );
}
