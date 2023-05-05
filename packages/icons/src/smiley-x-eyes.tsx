import { IconBase } from "./_base";

type Props = {
  className?: string;
};

export function SmileyXEyes(props: Props) {
  return (
    <IconBase {...props}>
      <circle
        cx="128"
        cy="128"
        fill="none"
        r="96"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="16"
      />

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
      />

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
      />

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
      />

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
      />

      <circle cx="128" cy="180" r="12" />
    </IconBase>
  );
}
