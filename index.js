var cheerio = require('cheerio');

module.exports = {
  website: {
    assets: "./assets",
    js: [],
    css: [
      'timeline.css'
    ]
  },
  hooks: {
    "page": function (page) {
      var content = page.content,
          match = content.match(/<!--\s*timeline\s*-->[\s\S]+?<!--\s*\/timeline\s*-->/g),
          idList = [];
      content = content.replace(/<!--\s*timeline\s*-->/g, '<div class="timeline-plugin">')
        .replace(/<!--\s*\/timeline\s*-->/g, '</div>');

      if (match) {
        var $ = cheerio.load(content);
        page.content = $.html();
      }
      return page;
    }
  }
};
