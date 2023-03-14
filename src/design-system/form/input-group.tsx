import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

export function InputGroup({ children }: Props) {
  return (
    <div className="space-y-1" role="group">
      {children}
    </div>
  );
}
