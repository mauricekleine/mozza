import { ReactNode } from "react";

import { Stack } from "@mk/ui";

export function ServicesCardRoot({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  return (
    <div className="rounded-lg border border-slate-200/10 bg-gradient-to-br from-slate-200/10 to-black px-8 py-8">
      <Stack gap={4}>{children}</Stack>
    </div>
  );
}
