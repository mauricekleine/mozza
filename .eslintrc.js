// This configuration only applies to the package manager root.
/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["mozza"],
  ignorePatterns: ["apps/**", "packages/**"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
