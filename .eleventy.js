const minifyHtmlOutput = (content, outputPath) => {
  if(outputPath && outputPath.endsWith('.html') ) {
    return require('html-minifier').minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true
    });
  }

  return content;
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'src/_assets/ico': 'ico',
    'src/_assets/img': 'img',
    'src/_assets/svg': 'svg',
    'src/manifest.webmanifest': 'manifest.webmanifest'
  });

  eleventyConfig.addLayoutAlias('main', 'layouts/main.njk');

  eleventyConfig.addPlugin(require('eleventy-plugin-svg-contents'));

  eleventyConfig.addTransform('htmlmin', minifyHtmlOutput);

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    templateFormats: ["njk"],
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    passthroughFileCopy: true
  };
}