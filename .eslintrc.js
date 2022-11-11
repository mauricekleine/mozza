/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  overrides: [
    {
      files: ["./design-system/**/*", "./**/index.ts"],
      rules: {
        "no-restricted-imports": "off",
      },
    },
  ],
  plugins: ["import", "unused-imports"],
  rules: {
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "~/design-system",
            group: "internal",
          },
          {
            pattern: "~/design-system/icon",
            group: "internal",
          },
          {
            pattern: "~/lib",
            group: "internal",
            position: "after",
          },
          {
            pattern: "~/**",
            group: "internal",
            position: "after",
          },
        ],
      },
    ],
    "no-restricted-imports": [
      "warn",
      {
        patterns: [
          {
            group: ["../*"],
            message:
              "Imports are only allowed as siblings ('./') or as absolute imports",
          },
        ],
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
    "unused-imports/no-unused-imports": "error",
  },
};
