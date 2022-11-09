import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

export function Fieldset({ children }: Props) {
  return <fieldset className="space-y-6">{children}</fieldset>;
}
