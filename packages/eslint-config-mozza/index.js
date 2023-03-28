/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:storybook/recommended",
    "plugin:unicorn/all",
    "turbo",
    "prettier",
  ],
  overrides: [
    {
      files: ["./src/**/*.{js,jsx,ts,tsx}"],
      rules: {
        "unicorn/prefer-module": "error",
      },
    },
    {
      files: ["./src/features/ui/**/*", "./src/**/index.ts"],
      rules: {
        "no-restricted-imports": "off",
      },
    },
    {
      extends: [
        "plugin:jest/recommended",
        "plugin:jest-dom/recommended",
        "plugin:testing-library/react",
      ],
      files: ["./**/*.test.{js,jsx,ts,tsx}"],
      plugins: ["jest", "jest-dom", "testing-library"],
      rules: {
        "jest/consistent-test-it": "error",
        "jest/prefer-lowercase-title": ["error", { ignore: ["describe"] }],
        "jest/require-top-level-describe": "error",
        "jest/valid-title": ["error", { mustMatch: { it: "^should " } }],
      },
    },
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  plugins: ["sort", "unused-imports"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
        groups: ["builtin", "external", "parent", "sibling", "index"],
        "newlines-between": "always",
        pathGroups: [],
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
    "react/jsx-newline": ["warn", { prevent: false }],
    "react/jsx-sort-props": [
      "warn",
      {
        ignoreCase: true,
      },
    ],
    "sort/destructuring-properties": "error",
    "sort/object-properties": "error",
    "sort/type-properties": "error",
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        case: "kebabCase",
      },
    ],
    "unicorn/no-keyword-prefix": "off",
    "unicorn/no-null": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prevent-abbreviations": "off",
    "unused-imports/no-unused-imports": "error",
  },
};
