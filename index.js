var querystring = require('querystring')
  , extend = require('extend')
  , url = require('url')

module.exports = function appendQuery(uri, q) {
  var parts = url.parse(uri, true)
    , parsedQuery = extend(true, {}, parts.query, typeof q === 'string' ? querystring.parse(q) : q)

  parts.search = '?' + serialize(parsedQuery)
  return url.format(parts)
}

// serialize an object recursively
function serialize(obj, prefix) {
  var str = []

  Object.keys(obj).forEach(function (prop) {
    var val = obj[prop]
      , key = prefix ? prefix + '[' + prop + ']' : prop
      , query = typeof val === 'object' ?
        serialize(val, key) :
        encodeURIComponent(key) + '=' + encodeURIComponent(val)

    str.push(query)
  })

  return str.join('&')
}
