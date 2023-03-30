import {
  ComponentProps,
  ForwardedRef,
  ReactNode,
  Ref,
  forwardRef,
} from "react";

import { LinkBase, LinkBaseProps } from "../typography/_link-base";

type ButtonProps = {
  as?: "button";
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: ComponentProps<"button">["onClick"];
  type?: ComponentProps<"button">["type"];
};

type Props = {
  children: ReactNode;
} & (ButtonProps | LinkBaseProps);

function isAnchor(props: Props): props is LinkBaseProps {
  return props.as === "a" || typeof (props as LinkBaseProps).href === "string";
}

export const Button = forwardRef(function ButtonWithForwardedRef(
  props: Props & { className: string },
  ref: Ref<HTMLAnchorElement | HTMLButtonElement>
) {
  if (isAnchor(props)) {
    return (
      <LinkBase
        className={props.className}
        href={props.href}
        ref={ref as ForwardedRef<HTMLAnchorElement>}
      >
        {props.children}
      </LinkBase>
    );
  }

  return (
    <button
      className={props.className}
      disabled={props.isDisabled || props.isLoading}
      onClick={props.onClick}
      ref={ref as ForwardedRef<HTMLButtonElement>}
      type={props.type ?? "button"}
    >
      {props.children}
    </button>
  );
});

export type { Props as ButtonProps };
