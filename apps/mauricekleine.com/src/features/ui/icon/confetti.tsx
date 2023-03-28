import { IconBase } from "./icon-base";

type Props = {
  className?: string;
};

export function Confetti({ className }: Props) {
  return (
    <IconBase className={className}>
      <path
        d="M37.9,207.9,91.7,59.8a8,8,0,0,1,13.2-2.9l94.2,94.2a8,8,0,0,1-2.9,13.2L48.1,218.1A7.9,7.9,0,0,1,37.9,207.9Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>

      <path
        d="M168,72s0-24,24-24,24-24,24-24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>

      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="102.4"
        x2="57.6"
        y1="198.4"
        y2="153.6"
      ></line>

      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="144"
        x2="144"
        y1="16"
        y2="40"
      ></line>

      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="216"
        x2="232"
        y1="112"
        y2="128"
      ></line>

      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="216"
        x2="240"
        y1="80"
        y2="72"
      ></line>

      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="76.8"
        x2="155.2"
        y1="100.8"
        y2="179.2"
      ></line>
    </IconBase>
  );
}
