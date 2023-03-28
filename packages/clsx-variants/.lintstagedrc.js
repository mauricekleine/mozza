const baseConfig = require("../../.lintstagedrc.js");

module.exports = {
  "*.{js,ts}": ["eslint --fix"],
  ...baseConfig,
};
