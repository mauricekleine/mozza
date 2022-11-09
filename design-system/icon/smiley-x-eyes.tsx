type Props = {
  className?: string;
};

export function SmileyXEyes({ className = "h-4 w-4" }: Props) {
  return (
    <svg
      className={className}
      fill="currentColor"
      height="192"
      viewBox="0 0 256 256"
      width="192"
      xmlns="http://www.w3.org/2000/svg"
    >
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
    </svg>
  );
}
