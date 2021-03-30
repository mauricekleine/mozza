import classNames from "classnames";
import { MouseEventHandler, ReactNode, Ref, forwardRef } from "react";

import Theme from "./theme";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const Link = (
  { children, href, onClick }: Props,
  ref: Ref<HTMLAnchorElement>
) => (
  <Theme>
    {({ text }) =>
      href ? (
        <a
          className={classNames(text.link, "underline hover:no-underline")}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {children}
        </a>
      ) : (
        <a
          className={classNames(text.link, "underline hover:no-underline")}
          onClick={onClick}
          ref={ref}
        >
          {children}
        </a>
      )
    }
  </Theme>
);

export default forwardRef<HTMLAnchorElement, Props>(Link);
