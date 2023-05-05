module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-standard-scss"],
  plugins: ["stylelint-order"],
  rules: {
    "custom-property-pattern": "^[a-z]+(-((([a-z]|[0-9])+(\\\\.[0-9]+)?)))*$",
    "order/properties-alphabetical-order": true,
  },
};
