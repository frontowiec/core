const path = require("path");
const toPath = _path => path.join(process.cwd(), _path);

module.exports = {
  stories: [
    "../packages/**/stories/*.stories.tsx",
    "../packages/**/stories/*.stories.mdx"
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react")
        }
      }
    };
  }
};
