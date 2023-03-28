import { IconBase } from "./icon-base";

type Props = {
  className?: string;
};

export function Atom({ className }: Props) {
  return (
    <IconBase className={className}>
      <ellipse
        cx="128"
        cy="128"
        fill="none"
        rx="44"
        ry="116"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        transform="translate(-53 128) rotate(-45)"
      ></ellipse>

      <ellipse
        cx="128"
        cy="128"
        fill="none"
        rx="116"
        ry="44"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        transform="translate(-53 128) rotate(-45)"
      ></ellipse>

      <circle cx="128" cy="128" r="12"></circle>
    </IconBase>
  );
}
