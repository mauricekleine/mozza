const { resolve } = require("node:path");
const rules = require("./rules");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["next/core-web-vitals", "plugin:unicorn/all", "turbo", "prettier"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
  plugins: ["sort", "unused-imports"],
  rules: {
    ...rules,
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-newline": ["warn", { prevent: false }],
    "react/jsx-sort-props": [
      "warn",
      {
        ignoreCase: true,
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
};
