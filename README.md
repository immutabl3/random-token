# random-token

`npm install @immutabl3/random-token`

Generates a base64, url-safe token. Uses `-`, `_`, `0-9`, `a-z`, and `A-Z`.

# Usage

```js
const randomToken = require('@immutabl3/random-token');
const token = randomToken(); // '0XjaS_7F'
```

# API

### `token([n=8])`

Generates a token. Defaults to a length of 8.

#### Arguments

`[n=8]` *(number)*: the length of the token

#### Returns

*(string)*: Returns the token


### `.valid(token, [n])`

Validates a token string. Pass optional `length` to validate the length of the token as well.

#### Arguments

`[token]` *(string)*: the token to validate
`[n]` *(number)*: the length of the token


#### Returns

*(boolean)*: Returns `true` is the token is valid


### `.characters`

The string of characters used to generate then token. Use as a reference only. Changing this string will not change token generation.

# Tests

To run tests, download the repo and run:

- `npm install`
- `npm test`

# License

MIT
