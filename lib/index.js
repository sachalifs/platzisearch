/**
 * Module dependencies
 */

import scrape from 'scrape'
import { format as urlFormat } from 'url'

const protocol = 'https'
const hostname = 'platzi.com/blog'

export default async function search (query) {
  return new Promise((resolve, reject) => {
    const url = urlFormat({ protocol, hostname, query: { s: query } })
    scrape.request(url, function (err, $) {
      if (err) return reject(err)

      var blogposts = []

      $('article.post').each(div => {
        var url = div.find('a').first().attribs.href
        var title = div.find('h2.post-title').first().text
        var author = div.find('p.author').first().text
        var date = div.find('time.post-date').first().text

        blogposts.push({
          url: url,
          title: title,
          author: author,
          date: date
        })
      })

      resolve(blogposts)
    })
  })
}
