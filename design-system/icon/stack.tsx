import { IconBase } from "./icon-base";

type Props = {
  className?: string;
};

export function Stack({ className }: Props) {
  return (
    <IconBase className={className}>
      <polyline
        points="32 176 128 232 224 176"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></polyline>

      <polyline
        points="32 128 128 184 224 128"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></polyline>

      <polygon
        points="32 80 128 136 224 80 128 24 32 80"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></polygon>
    </IconBase>
  );
}
