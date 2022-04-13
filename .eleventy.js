const markdownIt = require('markdown-it');
const markdownItAttrs = require("markdown-it-attrs");
const markdownItContainer = require("markdown-it-container");

module.exports = function(config) {
    require("dotenv").config();
    
    const energyServicesForm1 = JSON.stringify(process.env.ENERGY_SERVICES_WTL);
    console.log('env1 -->', typeof energyServicesForm1 );
    console.log('env11 -->', energyServicesForm1 );
    const energyServicesForm2 = JSON.parse(process.env.ENERGY_SERVICES_WTL);
    console.log('env2 -->', typeof energyServicesForm2 );
    console.log('env22 -->', energyServicesForm2.actionUrl );

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