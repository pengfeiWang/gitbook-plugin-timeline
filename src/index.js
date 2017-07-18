var cheerio = require('cheerio');

module.exports = {
  website: {
    assets: "./assets",
    js: [],
    css: []
  },
  hooks: {
    "page": function (page) {
      var content = page.content,
          match = content.match(/<!--\s*timeline\s*-->[\s\S]+?<!--\s*\/timeline\s*-->/g),
          idList = [];
      var customTag = this.config.get("pluginsConfig").sectionx.tag || 'h2';

      if (!customTag.match(/^(h[1-6]|b)$/)) {
        customTag = 'h2';
      }

      if (match) {
          page.content = $.html();
      }
      return page;
    }
  }
};
