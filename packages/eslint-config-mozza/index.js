const { resolve } = require("node:path");
const rules = require("./rules");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:sort/recommended",
    "plugin:unicorn/all",
    "turbo",
    "prettier",
  ],
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    "dist/",
  ],
  overrides: [
    {
      files: ["*.js?(x)", "*.ts?(x)"],
    },
    {
      extends: ["plugin:testing-library/react"],
      files: ["*.test.js?(x)", "*.test.ts?(x)"],
    },
  ],
  plugins: ["sort", "unused-imports"],
  rules: {
    ...rules,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
};
