import { IconBase } from "./icon-base";

type Props = {
  className?: string;
};

export function CircleNotch({ className }: Props) {
  return (
    <IconBase className={className}>
      <path
        d="M168,40.7a96,96,0,1,1-80,0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
    </IconBase>
  );
}
