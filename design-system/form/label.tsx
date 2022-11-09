import { ComponentProps } from "react";

type IntrinsicLabelProps = ComponentProps<"label">;

type Props = {
  children: string;
  htmlFor: IntrinsicLabelProps["htmlFor"];
};

export function Label({ children, htmlFor, ...props }: Props) {
  return (
    <label
      className="block text-sm font-medium text-slate-300"
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </label>
  );
}
