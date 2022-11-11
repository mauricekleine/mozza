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
        rx="44"
        ry="116"
        transform="translate(-53 128) rotate(-45)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></ellipse>

      <ellipse
        cx="128"
        cy="128"
        rx="116"
        ry="44"
        transform="translate(-53 128) rotate(-45)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></ellipse>

      <circle cx="128" cy="128" r="12"></circle>
    </IconBase>
  );
}
