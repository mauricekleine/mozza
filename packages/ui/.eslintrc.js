/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["mozza/next"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  root: true,
  rules: {
    "no-restricted-imports": "off",
  },
};
