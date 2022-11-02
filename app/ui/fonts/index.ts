import { Inter, Lora } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const lora = Lora({
  subsets: ["latin"],
});

export const sans = inter.className;
export const serif = lora.className;
