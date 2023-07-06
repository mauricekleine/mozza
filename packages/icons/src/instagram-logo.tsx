import { IconBase } from "./_base";

type Props = {
  className?: string;
};

export function InstagramLogo(props: Props) {
  return (
    <IconBase {...props}>
      <circle
        cx="128"
        cy="128"
        fill="none"
        r="40"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="16"
      />

      <rect
        fill="none"
        height="192"
        rx="48"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        width="192"
        x="32"
        y="32"
      />

      <circle cx="180" cy="76" r="12" />
    </IconBase>
  );
}
