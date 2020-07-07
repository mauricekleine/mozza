/** @jsx createElement */
import { ReactNode, createElement } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

const Section = ({ children }: Props) => (
  <section className="bg-gradient-silver mb-8 px-8 py-6 rounded-lg">
    {children}
  </section>
);

export default Section;
