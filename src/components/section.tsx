/** @jsx createElement */
import classNames from "classnames";
import { ReactNode, createElement, useEffect, useState } from "react";

import Theme from "./theme";

type Props = {
  children: ReactNode | ReactNode[];
};

const createRandomNumberBetween = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const getRandomBounds = () => {
  const lowerBound = createRandomNumberBetween(5, 15);
  const upperBound = createRandomNumberBetween(85, 95);

  const first = Math.random() > 0.5 ? upperBound : lowerBound;
  const second = first === upperBound ? lowerBound : upperBound;

  return [first, second];
};

const Section = ({ children }: Props) => {
  const [diagonal, setDiagonal] = useState(0);
  const [antiDiagonal, setAntiDiagonal] = useState(0);

  useEffect(() => {
    const [first, second] = getRandomBounds();

    setDiagonal(first);
    setAntiDiagonal(second);
  }, []);

  return (
    <Theme>
      {({ bg, border }) => (
        <section
          className={classNames(
            "border-2 border-b-8",
            "mb-8 px-16 py-10 overflow-hidden shadw-xl z-10",
            bg.section,
            border.section
          )}
          style={{
            borderRadius: `${diagonal}% ${antiDiagonal}% ${diagonal}% ${antiDiagonal}%/${antiDiagonal}% ${diagonal}% ${antiDiagonal}% ${diagonal}%`,
          }}
        >
          {children}
        </section>
      )}
    </Theme>
  );
};

export default Section;
