import classNames from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

import Theme from "./theme";

type Props = {
  children: ReactNode;
  href?: string;
};

const InternalLink = ({ children, href }: Props) => {
  const router = useRouter();
  const isActiveRoute = router.route.includes(href);

  return (
    <Theme>
      {({ text }) => (
        <NextLink href={href}>
          <a
            className={classNames(text.link, {
              "font-bold": isActiveRoute,
              [text.active]: isActiveRoute,
            })}
          >
            {children}
          </a>
        </NextLink>
      )}
    </Theme>
  );
};

export default InternalLink;
