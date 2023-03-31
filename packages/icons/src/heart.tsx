import { IconBase } from "./_base";

type Props = {
  className?: string;
};

export function Heart({ className }: Props) {
  return (
    <IconBase className={className}>
      <path
        d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
    </IconBase>
  );
}
