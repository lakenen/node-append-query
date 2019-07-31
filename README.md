[![Build Status](https://travis-ci.org/lakenen/node-append-query.png?branch=master)](https://travis-ci.org/lakenen/node-append-query)

# append-query

Append querystring params to a URL.

## Installation

```
npm install append-query
```


## Usage

`appendQuery(url, query[, options])`

* **url** - a string URL to append to.
* **query** - a string or object containing query params to append.
* **options** (optional)
  * **encodeComponents** - whether or not to encode appended passed params using `encodeURIComponent`. Default: true.
  * **removeNull** - whether or not to remove params for null properties in the query object. Default: false (properties will be preserved with no value).

Example
```js
var appendQuery = require('append-query')

appendQuery('http://example.com/foo', 'bar=baz&beep=boop')
// http://example.com/foo?bar=baz&beep=boop
appendQuery('http://example.com/?foo=bar', 'hello=world')
// http://example.com/?foo=bar&hello=world
appendQuery('http://example.com/', { beep: 'boop' })
// http://example.com/?beep=boop
appendQuery('http://example.com/', { nothing: null })
// http://example.com/?nothing

// using pre-encoded values
appendQuery('http://example.com/', { preEncoded: '%22hello%2C%20world!%22' }, { encodeComponents: false })
// http://example.com/?preEncoded=%22hello%2C%20world!%22

// remove existing values
appendQuery('http://example.com/?test=1', { test: null }, { removeNull: true })
// http://example.com/

```


## Running Tests

```
npm test
```


## Change Log


* **2.1.0**
  - [#9](https://github.com/lakenen/node-append-query/pull/9) upgrade extend dependency to `^2.0.0`
* **2.0.1**
  - fix typo
* **2.0.0**
  - fix [#5](https://github.com/lakenen/node-append-query/issues/5)
  - add options: `encodeComponents` and `removeNull`
* **1.1.0**
  - add support for recursive serialization of nested objects
  - add support for arrays as properties


## License

([The MIT License](LICENSE))

Copyright 2014 Cameron Lakenen
