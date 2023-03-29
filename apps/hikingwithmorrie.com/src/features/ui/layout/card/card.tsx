import { ReactNode } from "react";

import { CardBody } from "./card-body";
import { CardFooter } from "./card-footer";
import { CardHeader } from "./card-header";

type Props = {
  children: ReactNode;
};

function Card({ children }: Props) {
  return (
    <div className="group cursor-pointer divide-y divide-grey-light rounded-lg border border-grey-light bg-white shadow transition-all hover:translate-y-0.5 hover:transform hover:border-green-dark hover:shadow-none">
      {children}
    </div>
  );
}

Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Header = CardHeader;

export { Card };
