import { clsx } from "clsx";
import { forwardRef } from "react";

import { LinkBase, LinkBaseProps, LinkRef } from "./link-base";

type Props<T extends string> = LinkBaseProps<T> & {
  isActive?: boolean;
};

export const Link = forwardRef(function LinkWithForwardedRef<T extends string>(
  { children, isActive, ...props }: Props<T>,
  ref: LinkRef
) {
  return (
    <LinkBase
      className={clsx("-mb-0.5 border-b-2 transition-colors", {
        "border-b-green-dark text-green-dark": isActive,
        "border-b-transparent text-grey-dark transition-transform hover:text-green-dark":
          !isActive,
      })}
      ref={ref}
      {...props}
    >
      {children}
    </LinkBase>
  );
});

export type { Props as LinkProps };
export type { LinkRef } from "./link-base";
