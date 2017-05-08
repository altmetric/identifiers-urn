# Identifiers - URN [![Build Status](https://travis-ci.org/altmetric/identifiers-urn.svg?branch=master)](https://travis-ci.org/altmetric/identifiers-urn)

Extract, validate and normalize [URNs](https://en.wikipedia.org/wiki/Uniform_Resource_Name).

**Current version:** 0.1.0  
**Supported Node.js versions:** 4, 5, 6, 7

## Installation

Add the following to your `package.json` via `yarn add identifiers-urn` or `npm install --save identifiers-urn`:

```shell
"identifiers-urn": "^0.1.0"
```

## Usage

```javascript
const urn = require("identifiers-urn");

urn.extract("En un pueblo italiano urn:1234:abc al pie de la montaña URN:foo:bar%23.\\");
//=> ["urn:1234:abc", "URN:foo:bar%23."]
```

## Other versions

We also maintain versions of this library for [Ruby](https://github.com/altmetric/identifiers) and [PHP](https://github.com/altmetric/php-identifiers).

## License

Copyright © 2017 Altmetric LLP

Distributed under the [MIT License](http://opensource.org/licenses/MIT).
