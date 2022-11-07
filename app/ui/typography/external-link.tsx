import { ArrowUpRight } from "phosphor-react";

type Props = {
  children: string;
  href: string;
};

export function ExternalLink({ children, href }: Props) {
  return (
    <a
      className="inline-flex items-center text-slate-400 underline transition-colors hover:text-slate-200 hover:no-underline"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span>{children}</span>

      <ArrowUpRight className="inline-block" />
    </a>
  );
}
