# Identifiers - URN [![Build Status](https://travis-ci.org/altmetric/identifiers-urn.svg?branch=master)](https://travis-ci.org/altmetric/identifiers-urn)

Extract, validate and normalize [URNs](https://en.wikipedia.org/wiki/Uniform_Resource_Name).

**Current version:** 0.2.0  
**Supported Node.js versions:** 4, 5, 6, 7

## Installation

Add the following to your `package.json` via `yarn add identifiers-urn` or `npm install --save identifiers-urn`:

```shell
"identifiers-urn": "^0.2.0"
```

## Usage

Use `extract` to extract all URNs normalised, or `scan` to obtain the originals.

```javascript
const urn = require("identifiers-urn");

urn.extract("En un pueblo italiano urn:1234:abc al pie de la montaña URN:Foo:bar%23.\\");
//=> ["urn:1234:abc", "urn:foo:bar%23."]

urn.scan("En un pueblo italiano urn:1234:abc al pie de la montaña URN:Foo:bar%23.\\");
//=> ["urn:1234:abc", "URN:Foo:bar%23."]
```

## Other versions

Other packages are available for different scholar identifiers:

DOIs (and ISBN-As): https://github.com/altmetric/identifiers-doi  
PubMed IDs: https://github.com/altmetric/identifiers-pubmed  
arXiv IDs: https://github.com/altmetric/identifiers-arxiv  
ORCID: https://github.com/altmetric/identifiers-orcid  
Handles: https://github.com/altmetric/identifiers-handle  
National Clinical Trials IDs: https://github.com/altmetric/identifiers-nct  
ADS Bibcodes : https://github.com/altmetric/identifiers-bibcode  
RePEc IDs: https://github.com/altmetric/identifiers-repec  

We also maintain versions of these libraries for [Ruby](https://github.com/altmetric/identifiers) and [PHP](https://github.com/altmetric/php-identifiers).

## License

Copyright © 2018 Altmetric LLP

Distributed under the [MIT License](http://opensource.org/licenses/MIT).
