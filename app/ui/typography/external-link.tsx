import { ArrowUpRight } from "phosphor-react";

type Props = {
  children: string;
  href: string;
};

export function ExternalLink({ children, href }: Props) {
  return (
    <a
      className="inline-flex items-center text-slate-200/75 underline transition-colors hover:text-white hover:no-underline"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span>{children}</span>

      <ArrowUpRight className="inline-block" />
    </a>
  );
}
