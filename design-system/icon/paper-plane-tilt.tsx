import { IconBase } from "./icon-base";

type Props = {
  className?: string;
};

export function PaperPlaneTilt({ className }: Props) {
  return (
    <IconBase className={className}>
      <path
        d="M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>

      <line
        x1="110.9"
        y1="145.1"
        x2="156.1"
        y2="99.9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
    </IconBase>
  );
}
