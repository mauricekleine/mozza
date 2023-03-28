import { IconBase } from "./icon-base";

type Props = {
  className?: string;
};

export function ArrowUpRight({ className }: Props) {
  return (
    <IconBase className={className}>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="64"
        x2="192"
        y1="192"
        y2="64"
      ></line>

      <polyline
        fill="none"
        points="88 64 192 64 192 168"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></polyline>
    </IconBase>
  );
}
