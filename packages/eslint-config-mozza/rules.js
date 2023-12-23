module.exports = {
  "import/order": [
    "error",
    {
      alphabetize: {
        order: "asc",
      },
      groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
      "newlines-between": "always",
      pathGroups: [
        {
          group: "internal",
          pattern: "~/**",
          position: "before",
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
};
