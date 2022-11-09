import { IconProps } from "phosphor-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type Icon = ForwardRefExoticComponent<
  IconProps & RefAttributes<SVGSVGElement>
>;
