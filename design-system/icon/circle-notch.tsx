type Props = {
  className?: string;
};

export function CircleNotch({ className = "h-4 w-4" }: Props) {
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

      <path
        d="M168,40.7a96,96,0,1,1-80,0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
    </svg>
  );
}
