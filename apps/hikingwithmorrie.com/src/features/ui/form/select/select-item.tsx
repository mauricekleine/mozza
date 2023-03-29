"use client";

import { Item, ItemIndicator, ItemText } from "@radix-ui/react-select";
import { ReactNode, forwardRef } from "react";

import { Check } from "../../icons";

type Props = {
  children: ReactNode;
  value: string;
};

const SelectItem = forwardRef<HTMLDivElement, Props>(
  function SelectItemWithForwardedRef({ children, ...props }, ref) {
    return (
      <Item
        className="flex cursor-pointer items-center justify-between px-3 py-1 outline-none hover:border-none hover:bg-grey-light"
        ref={ref}
        {...props}
      >
        <ItemText>{children}</ItemText>

        <ItemIndicator>
          <Check color="green.dark" />
        </ItemIndicator>
      </Item>
    );
  }
);

export { SelectItem };
