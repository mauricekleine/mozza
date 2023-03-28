/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["mozza"],
  root: true,
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
