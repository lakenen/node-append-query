[![Build Status](https://travis-ci.org/lakenen/node-append-query.png?branch=master)](https://travis-ci.org/lakenen/node-append-query)

# append-query

Append querystring params to a URL.

## Installation

```
npm install append-query
```


## Usage

Example
```js
var appendQuery = require('append-query')

appendQuery('http://example.com/foo', 'bar=baz&beep=boop')
// http://example.com/foo?bar=baz&beep=boop
appendQuery('http://example.com/?foo=bar', 'hello=world')
// http://example.com/?foo=bar&hello=world
appendQuery('http://example.com/', { beep: 'boop' })
// http://example.com/?beep=boop
```


## Running Tests

```
npm test
```

## License

([The MIT License](LICENSE))

Copyright 2014 Cameron Lakenen
