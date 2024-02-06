// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  //LinkedIn shortcode with a logo
  eleventyConfig.addShortcode("linkedin", function(url, altText) {
    const logoSrc = "/images/in-logo.png"; // adjust the path based on your project structure
    return `
      <a href="${url}" target="_blank" rel="noopener noreferrer">
        <img src="${logoSrc}" alt="${altText}" />
      </a>`;
  });

};