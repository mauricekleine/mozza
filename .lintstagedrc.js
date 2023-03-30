module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix"],
  "*.{js,json,jsx,md,mdx,ts,tsx}": ["prettier --write"],
  "*package.json": ["sort-package-json"],
};
