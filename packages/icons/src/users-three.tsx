import { IconBase } from "./_base";

type Props = {
  className?: string;
};

export function UsersThree({ className }: Props) {
  return (
    <IconBase className={className}>
      <circle
        cx="128"
        cy="140"
        fill="none"
        r="40"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></circle>

      <path
        d="M196,116a59.8,59.8,0,0,1,48,24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>

      <path
        d="M12,140a59.8,59.8,0,0,1,48-24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>

      <path
        d="M70.4,216a64.1,64.1,0,0,1,115.2,0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>

      <path
        d="M60,116A32,32,0,1,1,91.4,78"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>

      <path
        d="M164.6,78A32,32,0,1,1,196,116"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
    </IconBase>
  );
}
