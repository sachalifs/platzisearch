/**
 * Module dependencies
 */

import test from 'ava'
import search from '../lib/'

test('search', async t => {
  const blogposts = await search('3d touch')
  t.ok(blogposts.length >= 2)
})

test('search empty result', async t => {
  const blogposts = await search('esto-no-va-a-traer-resultados')
  t.is(blogposts.length, 0)
})
