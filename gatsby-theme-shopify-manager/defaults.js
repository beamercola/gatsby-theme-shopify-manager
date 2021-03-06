// got this pattern/idea from https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-theme-blog-core/gatsby-config.js
module.exports = (themeOptions) => {
  const shouldIncludeSourcePlugin =
    themeOptions.shouldIncludeSourcePlugin != null
      ? themeOptions.shouldIncludeSourcePlugin
      : true;

  const shouldWrapRootElementWithProvider =
    themeOptions.shouldWrapRootElementWithProvider != null
      ? themeOptions.shouldWrapRootElementWithProvider
      : true;

  const shopName = themeOptions.shopName || null;
  const accessToken = themeOptions.accessToken || null;

  return {
    shouldIncludeSourcePlugin,
    shouldWrapRootElementWithProvider,
    shopName,
    accessToken,
  };
};
