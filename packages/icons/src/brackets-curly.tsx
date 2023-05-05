import { IconBase } from "./_base";

type Props = {
  className?: string;
};

export function BracketsCurly(props: Props) {
  return (
    <IconBase {...props}>
      <path
        d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>

      <path
        d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
    </IconBase>
  );
}
