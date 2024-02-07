module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order"],
  rules: {
    "custom-property-pattern": "^[a-z]+(-((([a-z]|[0-9])+(\\\\.[0-9]+)?)))*$",
    "order/properties-alphabetical-order": true,
  },
};
