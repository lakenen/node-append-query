var test = require('tape')
  , appendQuery = require('..')

test('should append querystring to queryless url', function (t) {
  t.plan(1)
  var result = appendQuery('http://example.com/foo', 'bar=baz&beep=boop')
    , expected = 'http://example.com/foo?bar=baz&beep=boop'
  t.equal(result, expected, 'should be equal')
})

test('should append querystring to url that already has a query', function (t) {
  t.plan(1)
  var result = appendQuery('http://example.com/?foo=bar', 'hello=world')
    , expected = 'http://example.com/?foo=bar&hello=world'
  t.equal(result, expected, 'should be equal')
})

test('should append query object to url', function (t) {
  t.plan(1)
  var result = appendQuery('http://example.com/', { beep: 'boop' })
    , expected = 'http://example.com/?beep=boop'
  t.equal(result, expected, 'should be equal')
})

test('should append query object with nested properties to url', function (t) {
  t.plan(1)
  var result = appendQuery('http://example.com/', { beep: { boop: 'bop' } })
    , expected = 'http://example.com/?beep%5Bboop%5D=bop'
  t.equal(result, expected, 'should be equal')
})

test('should append query object with an array to url', function (t) {
  t.plan(1)
  var result = appendQuery('http://example.com/', { beep: ['boop', 'bop'] })
    , expected = 'http://example.com/?beep%5B%5D=boop&beep%5B%5D=bop'
  t.equal(result, expected, 'should be equal')
})

// Options

test('should encode a url if encodeComponents is truthy when passed as an option', function (t) {
  t.plan(1)
  var result = appendQuery('http://example.com/?foo="bar"', 'hello="world"', { encodeComponents: true })
    , expected = 'http://example.com/?foo=%22bar%22&hello=%22world%22'
  t.equal(result, expected, 'should be equal')
})

test('should not encode a url if encodeComponents is falsy when passed as an option', function (t) {
  t.plan(1)
  var result = appendQuery('http://example.com/?foo="bar"', 'hello="world"', { encodeComponents: false })
    , expected = 'http://example.com/?foo="bar"&hello="world"'
  t.equal(result, expected, 'should be equal')
})
