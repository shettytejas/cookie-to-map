# CookieToMap

A lightweight JS library to convert cookie strings to a JS Map.

## Why was this library created?

I needed something that could parse the some cookie strings retrieved directly from an HTTP Response (the Set-Cookie value), and I couldn't find any library that could make that happen. And since necessity is the mother of invention, this library was created! 😁

## Installation

`npm install cookie-to-map`

## Usage

Requiring the library:

```js
const CookieToMap = require('cookie-to-map');
```

Using the library:

```js
CookieToMap.parseCookieString('some=cookie_string; being_parsed=here;'); // => { 'some': 'cookie_string', 'being_parsed': 'here' }
```

##### Do note that using this library won't preserve the cookie [attributes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#attributes). This library only retrieves the key value pairs.

##### Example:
```js
CookieToMap.parseCookieString('some=cookie_string; Max-Age=36500'); // => { 'some': 'cookie_string' }
```

##### P.S : This library also tries to handle some comma-delimitted cookies, but that scenario wasn't that well tested. If you have some cases where the things are breaking, feel free to submit those cookie strings as an issue (and also a PR for that issue if you can 😜).

## Development

Wanna help me develop this library? Awesome :smile:
Here are the steps to get started:
1. Checkout a new branch with `develop` as the base.
2. Modify the code as needed.
3. Add / modify the test-cases. Also make sure that the code coverage is **atleast** 95% per file, else the checks won't pass.
5. Submit it as a PR after linking the issue! 😄

## Contributing

Bug reports and pull requests are welcome on [GitHub](https://github.com/shettytejas/cookie-to-map). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/shettytejas/cookie-to-map/blob/master/CODE_OF_CONDUCT.md).

Contribution in the following ways are accepted:
1. Raising Issues and Enhancement Requests (use the applicable labels).
2. Raising PRs for the pre-existing issues and enhancement requests.

## License

The library is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the CookieToMap's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/shettytejas/cookie-to-map/blob/master/CODE_OF_CONDUCT.md).
