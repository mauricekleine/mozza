import { ReactNode } from "react";

import { Stack } from "~/design-system";

export function ServicesCardRoot({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  return (
    <div className="rounded-lg border border-slate-200/10 bg-gradient-to-br from-slate-200/10 to-black px-8 py-8 text-left">
      <Stack gap={2} textAlign="center">
        {children}
      </Stack>
    </div>
  );
}
