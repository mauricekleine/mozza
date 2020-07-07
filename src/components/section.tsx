/** @jsx createElement */
import { ReactNode, createElement } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

const Section = ({ children }: Props) => (
  <section className="border-b-2 mb-8 px-8 py-6">{children}</section>
);

export default Section;
