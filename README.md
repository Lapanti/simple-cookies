# A very simple utility library for handling cookies in client code (JS or TS)
[![Build Status](https://img.shields.io/travis/Lapanti/simple-cookies/master.svg?style=flat-square)](https://travis-ci.org/Lapanti/simple-cookies) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT) [![DevDependency Status](https://img.shields.io/david/dev/lapanti/simple-cookies.svg?style=flat-square)](https://david-dm.org/lapanti/simple-cookies?type=dev) [![Coverage Status](https://img.shields.io/coveralls/Lapanti/simple-cookies/master.svg?style=flat-square)](https://coveralls.io/github/Lapanti/simple-cookies?branch=master) [![npm](https://img.shields.io/npm/dt/simple-cookies.svg?style=flat-square)](https://www.npmjs.com/package/simple-cookies) [![npm](https://img.shields.io/npm/v/simple-cookies.svg?style=flat-square)](https://www.npmjs.com/package/simple-cookies)

## Install

```
yarn add simple-cookies
```
OR
```
npm install simple-cookies
```

## How to use

```typescript
import cookies from 'simple-cookies';

cookies.set('example', 'value' /*, cookieOpts (see below) */); // Return true if cookies are supported
cookies.get('example' /*, cookieOpts (see below) */); // Returns 'value' if cookies are supported
cookies.remove('example' /*, cookieOpts (see below) */); // Returns true if cookies are supported
```

## Options
For each cookie-method you can pass an optional last argument that is an object with any of the following properties and values:

| Name      | Values                     | Effect                                                                             |
| --------- | -------------------------- | ---------------------------------------------------------------------------------- |
| silent    | `true` | `false` (default) | Whether to throw an error (`false`) or not (`true`) when cookies are not supported | 
| days      | a number                   | How long the cookies should be valid (in days) *optional*                          |
| secure    | `true` | `false` (default) | Whether the cookie should only be transmitted over secure protocols such as https  |
| path      | a string                   | Indicates the URL in which the cookie is used                                      |
| domain    | a string                   | The host(s) to whom the cookie will be sent to                                     |

## License
All of the code is licensed under the [MIT license](LICENSE)
