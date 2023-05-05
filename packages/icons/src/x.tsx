import { IconBase } from "./_base";

type Props = {
  className?: string;
};

export function X(props: Props) {
  return (
    <IconBase {...props}>
      <line
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="200"
        x2="56"
        y1="56"
        y2="200"
      ></line>

      <line
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="200"
        x2="56"
        y1="200"
        y2="56"
      ></line>
    </IconBase>
  );
}
