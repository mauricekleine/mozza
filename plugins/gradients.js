const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addUtilities, e, theme, variants }) => {
  const gradients = theme("gradients", {});
  const gradientVariants = variants("gradients", []);

  const utilities = Object.keys(gradients).map((name) => {
    const [start, end] = gradients[name];

    return {
      [`.bg-gradient-${e(name)}`]: {
        backgroundImage: `linear-gradient(to bottom, ${start}, ${end})`,
      },
    };
  });

  addUtilities(utilities, gradientVariants);
});
