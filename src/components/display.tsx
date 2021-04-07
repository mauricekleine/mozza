import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Title = ({ children }: Props) => (
  <h1 className="font-sans font-black leading-none my-12 text-5xl text-primary-800 sm:text-6xl">
    {children}
  </h1>
);

export default Title;
