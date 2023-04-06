import { IconBase } from "./_base";

type Props = {
  className?: string;
};

export function TSXFile({ className }: Props) {
  return (
    <IconBase className={className}>
      <path
        d="M48,112V40a8,8,0,0,1,8-8h96l56,56v24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />

      <polyline
        fill="none"
        points="152 32 152 88 208 88"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />

      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="168"
        x2="208"
        y1="152"
        y2="208"
      />

      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="208"
        x2="168"
        y1="152"
        y2="208"
      />

      <path
        d="M135.9,153.6s-29.43-7.78-31.8,11,38.43,10.12,35.78,30.72c-2.47,19.16-31.78,11-31.78,11"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />

      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="80"
        x2="40"
        y1="152"
        y2="152"
      />

      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        x1="60"
        x2="60"
        y1="152"
        y2="208"
      />
    </IconBase>
  );
}
