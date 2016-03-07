/**
 * Module dependencies
 */

var scrape = require('scrape');
var URL = 'https://platzi.com/blog/?s=';

module.exports = function search(query, cb) {
  scrape.request(URL + query, function (err, $) {
    if (err) return console.error(err)

    var blogposts = [];

    $('article.post').each(function (div) {
      var url = div.find('a').first().attribs.href;
      var title = div.find('h2.post-title').first().text;
      var author = div.find('p.author').first().text;
      var date = div.find('time.post-date').first().text;

      blogposts.push({
        url: url,
        title: title,
        author: author,
        date: date
      });
    })

    return cb(blogposts);
  })
}
