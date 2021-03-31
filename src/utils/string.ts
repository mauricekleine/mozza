export const capitalize = (string: string) =>
  string.toLowerCase().replace(/^./, string[0].toUpperCase());

export const slugToString = (slug: string) =>
  capitalize(slug.replace(/-/g, " "));

export const stringToSlug = (s: string) => s.toLowerCase().replace(/ /g, "-");
