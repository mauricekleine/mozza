import { Card as Root } from "./card";
import { CardIcon } from "./card-icon";
import { CardTitle } from "./card-title";

export const Card = Object.assign(Root, {
  Icon: CardIcon,
  Title: CardTitle,
});
