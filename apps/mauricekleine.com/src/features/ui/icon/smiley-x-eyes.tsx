import { IconBase } from "./icon-base";

type Props = {
  className?: string;
};

export function SmileyXEyes({ className }: Props) {
  return (
    <IconBase className={className}>
      <circle
        cx="128"
        cy="128"
        fill="none"
        r="96"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="16"
      ></circle>

      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="184"
        x2="152"
        y1="96"
        y2="128"
      ></line>

      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="184"
        x2="152"
        y1="128"
        y2="96"
      ></line>

      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="104"
        x2="72"
        y1="96"
        y2="128"
      ></line>

      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="104"
        x2="72"
        y1="128"
        y2="96"
      ></line>

      <circle cx="128" cy="180" r="12"></circle>
    </IconBase>
  );
}
