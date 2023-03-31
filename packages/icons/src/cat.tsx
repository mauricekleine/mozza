import { IconBase } from "./_base";

type Props = {
  className?: string;
};

export function Cat({ className }: Props) {
  return (
    <IconBase className={className}>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="128"
        x2="128"
        y1="192"
        y2="224"
      ></line>

      <circle cx="84" cy="140" r="12"></circle>

      <circle cx="172" cy="140" r="12"></circle>

      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="128"
        x2="128"
        y1="48"
        y2="88"
      ></line>

      <polyline
        fill="none"
        points="144 176 128 192 112 176"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></polyline>

      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="96"
        x2="96"
        y1="53"
        y2="88"
      ></line>

      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="160"
        x2="160"
        y1="53"
        y2="88"
      ></line>

      <path
        d="M32,136V51.3a8,8,0,0,1,13.7-5.6L67.6,67.6h0A100.8,100.8,0,0,1,128,48a100.8,100.8,0,0,1,60.4,19.6h0l21.9-21.9A8,8,0,0,1,224,51.3V136c0,48.6-43,88-96,88S32,184.6,32,136Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
    </IconBase>
  );
}
