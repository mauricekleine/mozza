import { Icon } from "@mozza-icons/react";

import styles from "./icon.module.scss";

type Props = {
  animation?: "spin";
  color?:
    | "black"
    | "blue.100"
    | "blue.200"
    | "blue.300"
    | "blue.400"
    | "blue.500"
    | "blue.600"
    | "blue.700"
    | "blue.800"
    | "blue.900"
    | "gray.100"
    | "gray.200"
    | "gray.300"
    | "gray.400"
    | "gray.500"
    | "gray.600"
    | "gray.700"
    | "gray.800"
    | "gray.900"
    | "green.100"
    | "green.200"
    | "green.300"
    | "green.400"
    | "green.500"
    | "green.600"
    | "green.700"
    | "green.800"
    | "green.900"
    | "purple.100"
    | "purple.200"
    | "purple.300"
    | "purple.400"
    | "purple.500"
    | "purple.600"
    | "purple.700"
    | "purple.800"
    | "purple.900"
    | "red.100"
    | "red.200"
    | "red.300"
    | "red.400"
    | "red.500"
    | "red.600"
    | "red.700"
    | "red.800"
    | "red.900"
    | "white";
  icon: Icon;
  size?: "xs" | "sm" | "md" | "lg";
};

export function Icon({ animation, color, icon, size = "md" }: Props) {
  const Icon = icon;

  return (
    <Icon
      className={styles.icon}
      data-animation={animation}
      data-color={color}
      data-size={size}
    />
  );
}
