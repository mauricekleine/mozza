/** @type {import('lint-staged').Config} */
module.exports = {
  "*.{css,scss}": ["stylelint --fix"],
  "*.{js,jsx,ts,tsx}": ["eslint --fix"],
  "*.{js,json,jsx,md,mdx,ts,tsx}": ["prettier --write"],
  "**/package.json": ["sort-package-json"],
};
