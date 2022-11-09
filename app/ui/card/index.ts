import { CardIcon } from "./card-icon";
import { CardRoot } from "./card-root";
import { CardTitle } from "./card-title";

export const Card = Object.assign(CardRoot, {
  Icon: CardIcon,
  Title: CardTitle,
});
