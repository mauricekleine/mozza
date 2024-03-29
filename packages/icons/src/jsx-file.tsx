import { IconBase } from "./_base";

type Props = {
  className?: string;
};

export function JSXFile(props: Props) {
  return (
    <IconBase {...props}>
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

      <path
        d="M135.9,153.6s-29.43-7.78-31.8,11,38.43,10.12,35.78,30.72c-2.47,19.16-31.78,11-31.78,11"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />

      <path
        d="M36,190a18,18,0,0,0,36,0V152"
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
    </IconBase>
  );
}
