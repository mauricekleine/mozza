import {
  ComponentProps,
  ForwardedRef,
  ReactNode,
  Ref,
  forwardRef,
} from "react";

import { Link, LinkProps } from "../typography/link";

type ButtonProps = {
  as?: "button";
  children: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: ComponentProps<"button">["onClick"];
  type?: ComponentProps<"button">["type"];
};

type Props = ButtonProps | LinkProps;

function isButton(props: Props): props is ButtonProps {
  return !props.as || props.as === "button";
}

export const Button = forwardRef(function ButtonWithForwardedRef(
  props: Props & {
    className?: string;
  },
  ref: Ref<HTMLAnchorElement | HTMLButtonElement>
) {
  if (isButton(props)) {
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
  }

  return (
    <Link
      as={props.as}
      className={props.className}
      href={props.href}
      ref={ref as ForwardedRef<HTMLAnchorElement>}
    >
      {props.children}
    </Link>
  );
});

export type { Props as ButtonProps };
