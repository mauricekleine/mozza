/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["mozza/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
