module.exports = function(eleventyConfig) {
  // Passthrough copy for CSS files
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("delicious-bites-logo.png");
  eleventyConfig.addPassthroughCopy("chocolate-chip-cookies.png");
  eleventyConfig.addPassthroughCopy("profile-picture.png");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
