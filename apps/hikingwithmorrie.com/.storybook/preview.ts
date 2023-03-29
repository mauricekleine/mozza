import type { Preview } from "@storybook/react";

import "./index.css";

const preview: Preview = {
  globalTypes: {
    locale: {
      description: "Locale",
      defaultValue: "en",
      name: "Locale",
      toolbar: {
        dynamicTitle: true,
        icon: "globe",
        items: [
          { value: "en", title: "English" },
          { value: "nl", title: "Nederlands" },
        ],
      },
    },
  },
  loaders: [
    async (context) => {
      return {
        dictionary: (
          await import(`../src/features/i18n/${context.globals.locale}.json`)
        ).default,
      };
    },
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: "light",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
