const markdownIt = require('markdown-it');
const markdownItAttrs = require("markdown-it-attrs");
const markdownItContainer = require("markdown-it-container");

module.exports = function(config) {
    require("dotenv").config();
    config.addPassthroughCopy('en-us/assets');


    let options = {
        html: true,
        breaks: true,
        linkify: true
      };

    let markdownLib = markdownIt(options)
    .use(markdownItAttrs)
    .use(markdownItContainer, "gif-gallery")
    .use(markdownItContainer, "gif-pagination")
    .use(markdownItContainer, "content")
    .use(markdownItContainer, "page-404-container");

    config.setLibrary("md", markdownLib);

    return {
        passthroughFileCopy: true,
        markdownTemplateEngines: 'njk',
        templateFormats: ['html','njk','md'],
        dir: {
            input: '.'            
        }
    }

}