import { ServicesCardDescription } from "./services-card-description";
import { ServicesCardIcon } from "./services-card-icon";
import { ServicesCardRoot } from "./services-card-root";
import { ServicesCardTitle } from "./services-card-title";

export const ServicesCard = Object.assign(ServicesCardRoot, {
  Description: ServicesCardDescription,
  Icon: ServicesCardIcon,
  Title: ServicesCardTitle,
});
