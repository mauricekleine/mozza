/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["import", "unused-imports"],
  rules: {
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
        groups: ["builtin", "external", "parent", "sibling", "index"],
        "newlines-between": "always",
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: [".*"],
      },
    ],
    "react/jsx-newline": [1, { prevent: false }],
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
  },
};
