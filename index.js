var querystring = require('querystring')
  , extend = require('extend')
  , url = require('url')

module.exports = function appendQuery(uri, q, opts) {
  var parts = url.parse(uri, true)
    , parsedQuery = extend(true, {}, parts.query, typeof q === 'string' ? querystring.parse(q) : q)
    , opts = opts ? opts : { encodeComponents: true };

  parts.search = '?' + serialize(parsedQuery, opts)
  return url.format(parts)
}

// serialize an object recursively
function serialize(obj, opts, prefix) {
  var str = []
    , useArraySyntax = false

  // if there's a prefix, and this object is an array, use array syntax
  // i.e., `prefix[]=foo&prefix[]=bar` instead of `prefix[0]=foo&prefix[1]=bar`
  if (Array.isArray(obj) && prefix) {
    useArraySyntax = true
  }

  Object.keys(obj).forEach(function (prop) {
    var key, query, val = obj[prop]

    key = prefix ?
      prefix + '[' + (useArraySyntax ? '' : prop) + ']' :
      prop

    query = typeof val === 'object' ?
      serialize(val, opts, key) :
      opts.encodeComponents ?
        encodeURIComponent(key) + '=' + encodeURIComponent(val) :
        key + '=' + val;

    str.push(query)
  })

  return str.join('&')
}
