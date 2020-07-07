/** @jsx createElement */
import { ReactNode, createElement } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

const Section = ({ children }: Props) => (
  <section className="bg-white border-b-4 mb-8 px-10 py-8 rounded-lg shadow-lg">
    {children}
  </section>
);

export default Section;
