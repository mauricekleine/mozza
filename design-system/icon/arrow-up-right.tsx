import { IconBase } from "./icon-base";

type Props = {
  className?: string;
};

export function ArrowUpRight({ className }: Props) {
  return (
    <IconBase className={className}>
      <rect width="256" height="256" fill="none"></rect>

      <line
        x1="64"
        y1="192"
        x2="192"
        y2="64"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>

      <polyline
        points="88 64 192 64 192 168"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></polyline>
    </IconBase>
  );
}
