import { IconBase } from "./_base";

type Props = {
  className?: string;
};

export function Database(props: Props) {
  return (
    <IconBase {...props}>
      <ellipse
        cx="128"
        cy="80"
        fill="none"
        rx="88"
        ry="48"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></ellipse>

      <path
        d="M40,80v48c0,26.5,39.4,48,88,48s88-21.5,88-48V80"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>

      <path
        d="M40,128v48c0,26.5,39.4,48,88,48s88-21.5,88-48V128"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
    </IconBase>
  );
}
