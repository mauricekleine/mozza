import { ArrowUpRight } from "@mozza-icons/react";
import { ComponentProps, ReactNode, Ref, forwardRef } from "react";

import { isExternalLink } from "~/ui/typography/link";

import styles from "./button.module.scss";

type ButtonProps = {
  as?: "button";
  href?: never;
  onClick?: () => void;
  type?: ComponentProps<"button">["type"];
};

type LinkProps = {
  as: "a";
  href: string;
  onClick?: never;
  type?: never;
};

type Props = (ButtonProps | LinkProps) & {
  children: ReactNode;
  isDisabled?: boolean;
  size?: "sm" | "md";
  variant: "primary" | "secondary" | "tertiary";
};

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, Props>(
  (props, ref) => {
    if (props.as === "a") {
      const {
        as,
        children,
        href,
        isDisabled,
        size = "md",
        variant = "primary",
        ...rest
      } = props;
      const isExternal = isExternalLink(href);

      return (
        <a
          aria-disabled={isDisabled}
          className={styles.button}
          data-size={size}
          data-variant={variant}
          href={href}
          ref={ref as Ref<HTMLAnchorElement>}
          rel={isExternal ? "noopener noreferrer" : undefined}
          role="button"
          tabIndex={0}
          target={isExternal ? "_blank" : undefined}
          {...rest}
        >
          {children}

          {isExternal ? <ArrowUpRight /> : null}
        </a>
      );
    }

    const {
      as,
      children,
      href,
      isDisabled,
      onClick,
      size = "md",
      type,
      variant = "primary",
      ...rest
    } = props;

    return (
      <button
        className={styles.button}
        data-size={size}
        data-variant={variant}
        disabled={isDisabled}
        onClick={onClick}
        ref={ref as Ref<HTMLButtonElement>}
        type={type}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
