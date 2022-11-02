import { Inter, Lora } from "@next/font/google";

const inter = Inter({
  preload: true,
  subsets: ["latin"],
});

const lora = Lora({
  preload: true,
  subsets: ["latin"],
});

export const sans = inter;
export const serif = lora;
