/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["mozza"],
  root: true,
  rules: {
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
        groups: ["builtin", "external", "parent", "sibling", "index"],
        "newlines-between": "always",
        pathGroups: [
          {
            group: "external",
            pattern: "@mk/**",
            position: "after",
          },
        ],
      },
    ],
  },
};
