const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

/** @type {import('lint-staged').Config} */
module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "*.{js,json,jsx,md,mdx,ts,tsx}": ["prettier --write"],
  "**/package.json": ["sort-package-json"],
};
