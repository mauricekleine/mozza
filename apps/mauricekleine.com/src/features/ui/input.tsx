import { Input as InputBase, InputProps } from "@mozza-ui/react";
import { clsxVariants } from "clsx-variants";

const variant = clsxVariants({
  variants: {
    isInvalid: {
      false: "border-slate-400 focus:border-blue-500 focus:ring-blue-500",
      true: "border-red-500 focus:border-red-500 focus:ring-red-500",
    },
  },
});

type Props = InputProps & {
  isInvalid?: boolean;
};

export function Input({ isInvalid, ...props }: Props) {
  const className = variant(
    "block w-full rounded-md text-slate-800 placeholder:text-slate-400",
    {
      isInvalid,
    }
  );

  return <InputBase className={className} {...props} />;
}
