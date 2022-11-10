import { IconBase } from "./icon-base";

type Props = {
  className?: string;
};

export function SmileyXEyes({ className }: Props) {
  return (
    <IconBase className={className}>
      <rect width="256" height="256" fill="none"></rect>

      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="16"
      ></circle>

      <line
        x1="184"
        y1="96"
        x2="152"
        y2="128"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>

      <line
        x1="184"
        y1="128"
        x2="152"
        y2="96"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>

      <line
        x1="104"
        y1="96"
        x2="72"
        y2="128"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>

      <line
        x1="104"
        y1="128"
        x2="72"
        y2="96"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>

      <circle cx="128" cy="180" r="12"></circle>
    </IconBase>
  );
}
