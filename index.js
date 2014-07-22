var querystring = require('querystring')
  , extend = require('extend')
  , url = require('url')

module.exports = function appendQuery(uri, q) {
  var parts = url.parse(uri, true)
    , parsedQuery = typeof q === 'string' ? querystring.parse(q) : q

  extend(parts.query, parsedQuery)
  // it's necessary to delete parts.search so parts.query will be used
  delete parts.search
  return url.format(parts)
}
