import classNames from "classnames";
import { ComponentProps, ForwardedRef, forwardRef } from "react";

import { ButtonContent } from "./button-content";
import type { Props as ButtonContentProps } from "./button-content";

export type ButtonSize = "sm" | "md";

type IntrinsicAnchorProps = ComponentProps<"a">;
type IntrinsicButtonProps = ComponentProps<"button">;

type CommonProps = {
  variant?: "link" | "outline" | "solid";
} & ButtonContentProps;

type AnchorProps = {
  as: "a";
  href: IntrinsicAnchorProps["href"];
} & CommonProps;

type ButtonProps = {
  as?: "button";
  href?: never;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: IntrinsicButtonProps["onClick"];
  type?: IntrinsicButtonProps["type"];
} & CommonProps;

function isAnchor(props: Props): props is AnchorProps {
  return (props as AnchorProps).as === "a";
}

export type Props = AnchorProps | ButtonProps;

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, Props>(
  function Button({ ...props }, ref) {
    const {
      children,
      iconLeft,
      iconRight,
      size = "md",
      variant = "outline",
    } = props;

    if (!("as" in props)) {
      props.as = "button";
    }

    const className = classNames("rounded-full transition-colors", {
      "py-2 px-6 text-sm": size === "sm",
      "py-3 px-8": size === "md",
      "hover:underline": variant === "link",
      "border border-slate-400 hover:border-slate-200": variant === "outline",
      "bg-slate-200 text-slate-800 hover:bg-slate-300 hover:text-slate-900":
        variant === "solid",
    });

    if (isAnchor(props)) {
      const { href } = props;
      const isExternalLink = href?.startsWith("http");

      const anchorProps: IntrinsicAnchorProps = {
        className,
        href,
      };

      if (isExternalLink) {
        anchorProps["rel"] = "noopener noreferrer";
        anchorProps["target"] = "_blank";
      }

      return (
        <a {...anchorProps} ref={ref as ForwardedRef<HTMLAnchorElement>}>
          <ButtonContent iconLeft={iconLeft} iconRight={iconRight} size={size}>
            {children}
          </ButtonContent>
        </a>
      );
    }

    const { isDisabled, isLoading, onClick, type = "button" } = props;

    return (
      <button
        className={classNames(className, {
          "opacity-75": isDisabled,
          "animate-pulse": isLoading,
        })}
        disabled={isDisabled || isLoading}
        onClick={onClick}
        ref={ref as ForwardedRef<HTMLButtonElement>}
        type={type}
      >
        <ButtonContent
          iconLeft={iconLeft}
          iconRight={iconRight}
          isLoading={isLoading}
          size={size}
        >
          {children}
        </ButtonContent>
      </button>
    );
  }
);