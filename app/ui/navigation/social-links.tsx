import { GithubLogo, GoodreadsLogo, LinkedinLogo } from "~/ui/icon";
import { Link } from "~/ui/typography";

import { Stack } from "../layout";

export function SocialLinks() {
  return (
    <Stack
      alignItems="center"
      direction="horizontal"
      gap={2}
      justifyContent="center"
    >
      <Link className="p-1" href="https://github.com/mauricekleine" type="nav">
        <GithubLogo className="h-4 w-4 fill-white" />
      </Link>

      <Link
        className="p-1"
        href="https://www.goodreads.com/mauricekleine"
        type="nav"
      >
        <GoodreadsLogo className="h-[0.875rem] w-[0.875rem] fill-white" />
      </Link>

      <Link
        className="p-1"
        href="https://www.linkedin.com/in/mauricekleine/"
        type="nav"
      >
        <LinkedinLogo className="h-4 w-4 fill-white" />
      </Link>
    </Stack>
  );
}
