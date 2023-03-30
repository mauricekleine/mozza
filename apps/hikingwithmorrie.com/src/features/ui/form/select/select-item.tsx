"use client";

import { Check } from "@mozza-icons/react";
import { Item, ItemIndicator, ItemText } from "@radix-ui/react-select";
import { ReactNode, forwardRef } from "react";

type Props = {
  children: ReactNode;
  value: string;
};

const SelectItem = forwardRef<HTMLDivElement, Props>(
  function SelectItemWithForwardedRef({ children, ...props }, ref) {
    return (
      <Item
        className="hover:bg-grey-light flex cursor-pointer items-center justify-between px-3 py-1 outline-none hover:border-none"
        ref={ref}
        {...props}
      >
        <ItemText>{children}</ItemText>

        <ItemIndicator>
          <Check className="text-green-dark h-5 w-5" />
        </ItemIndicator>
      </Item>
    );
  }
);

export { SelectItem };
