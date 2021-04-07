import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Title = ({ children }: Props) => (
  <p className="font-sans font-black leading-none my-12 text-5xl text-primary-800 sm:text-6xl">
    {children}
  </p>
);

export default Title;
