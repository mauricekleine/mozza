import { IconBase } from "./_base";

type Props = {
  className?: string;
};

export function Stack(props: Props) {
  return (
    <IconBase {...props}>
      <polyline
        fill="none"
        points="32 176 128 232 224 176"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></polyline>

      <polyline
        fill="none"
        points="32 128 128 184 224 128"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></polyline>

      <polygon
        fill="none"
        points="32 80 128 136 224 80 128 24 32 80"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></polygon>
    </IconBase>
  );
}
