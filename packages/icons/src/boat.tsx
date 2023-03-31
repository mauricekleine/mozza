import { IconBase } from "./_base";

type Props = {
  className?: string;
};

export function Boat({ className }: Props) {
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
        y1="48"
        y2="24"
      ></line>

      <path
        d="M224,160c-14.6,51-82.2,68.8-94.2,71.6a7.3,7.3,0,0,1-3.6,0C114.2,228.8,46.6,211,32,160V125.8a8,8,0,0,1,5.5-7.6l88-29.4a8.5,8.5,0,0,1,5,0l88,29.4a8,8,0,0,1,5.5,7.6Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>

      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="128"
        x2="128"
        y1="168"
        y2="88.4"
      ></line>

      <path
        d="M56,112V56a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v56"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
    </IconBase>
  );
}
