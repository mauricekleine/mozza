module.exports = {
  purge: ["./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {},
    fontFamily: {
      mono: [
        "PT Mono",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    gradients: (theme) => ({
      "metal": [theme("colors.gray.800"), theme("colors.gray.900")],
      "silver": [theme("colors.white"), theme("colors.gray.100")],
    }),
  },
  variants: {},
  plugins: [require("./plugins/gradients")],
};
