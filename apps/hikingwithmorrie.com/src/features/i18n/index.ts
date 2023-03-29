const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  nl: () => import("./nl.json").then((module) => module.default),
} as const;

export const config = {
  defaultLocale: "en",
  locales: Object.keys(dictionaries),
} as const;

export const getDictionary = (locale: keyof typeof dictionaries) => {
  return dictionaries[locale]();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
export type Locale = keyof typeof dictionaries;
