import { IconBase } from "./_base";

type Props = {
  className?: string;
};

export function Atom(props: Props) {
  return (
    <IconBase {...props}>
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
