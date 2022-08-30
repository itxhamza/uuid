# @itxhamza/uuid

[![NPM Version][npm-version-image]][npm-url]
[![NPM Install Size][npm-install-size-image]][npm-install-size-url]

## Quickstart

To create a random UUID...

**1. Install**

```shell
npm install uuid
```

**2. Create a UUID** (ES6 module syntax)

```javascript
import { uuid, NILL } from "@itxhamza/uuid";
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
NILL; // ⇨ 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx'
```

... or using CommonJS syntax:

```javascript
const { uuid } = require("@itxhamza/uuid");
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
```

**3. Create a UUID With Custom Mask** (ES6 module syntax)

```javascript
import { uuid } from "@itxhamza/uuid";
uuidv4("xxxx-xxxx"); // ⇨ '9b1d-eb4d'
uuidv4("xx-xxxxxxxxxx"); // ⇨ '57-1801edd0ac'
```

[npm-install-size-image]: https://badgen.net/packagephobia/install/@itxhamza/uuid
[npm-install-size-url]: https://packagephobia.com/result?p=@itxhamza/uuid
[npm-url]: https://npmjs.org/package/@itxhamza/uuid
[npm-version-image]: https://badgen.net/npm/v/@itxhamza/uuid
