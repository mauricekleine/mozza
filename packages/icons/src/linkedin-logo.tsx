import { IconBase } from "./_base";

type Props = {
  className?: string;
};

export function LinkedinLogo(props: Props) {
  return (
    <IconBase {...props}>
      <rect
        fill="none"
        height="184"
        rx="8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        width="184"
        x="36"
        y="36"
      ></rect>

      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="120"
        x2="120"
        y1="112"
        y2="176"
      ></line>

      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="88"
        x2="88"
        y1="112"
        y2="176"
      ></line>

      <path
        d="M120,140a28,28,0,0,1,56,0v36"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>

      <circle cx="88" cy="80" r="12"></circle>
    </IconBase>
  );
}
