module.exports = {
  // "stories": [
  //   "../stories/**/*.stories.mdx",
  //   "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  // ],
  stories: [
    "../packages/**/stories/*.stories.tsx",
    "../packages/**/stories/*.stories.mdx"
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"]
};
