const Base = require('./base');
const CookieTuple = require('./cookie-tuple');

/**
 * This library handles implememtation of mapping cookie strings to objects.
 */
class CookieToMap extends Base {
  static #COOKIE_ATTRIBUTES = new Set(['domain', 'expires', 'httponly', 'max-age', 'path', 'samesite', 'secure']);

  /**
   * It takes a string of cookies and returns a map of cookies.
   * @param {String} cookieStr - The string of cookies to parse.
   * @return {Map<String, String>} A map of the cookie key and value.
   */
  static _parseCookies(cookieStr) {
    const splitCookies = this._cookieStringSplitter(cookieStr, /; ?/);
    const cookieTuples = this._getCookieTupleArray(splitCookies);
    const cookieMap = this._getCookieMap(cookieTuples);

    return cookieMap;
  }

  /**
   * This method parses a single cookie string.
   * A single cookie string should be of pattern: key=value.
   * In case due to some cookie pattern, where some cookies are separated with a comma,
   * there's a recursive retry implemented (only for commas).
   * For ex. if the singleCookieStr is of pattern key1=value1,key2=value2, the method will
   * call itself recursively to get both the cookie's key value pairs.
   *
   * This method also removes some common cookie attributes (listed above in #COOKIE_ATTRIBUTES)
   * @param {String} cookieStr Cookie String of pattern -> key=value (may also accept key=value, key=value, ...)
   * @return {(CookieTuple|CookieTuple[])} Returns CookieTuple (or CookieTuple[] in case of comma delimited input).
   */
  static _parseIntoTuple(cookieStr) {
    const firstIndexOfEquals = cookieStr.indexOf('=');

    if (firstIndexOfEquals == cookieStr.lastIndexOf('=')) {
      const [key, value] = cookieStr.split('=');
      if (this.#COOKIE_ATTRIBUTES.has(key.toLowerCase())) return null;

      return new CookieTuple(key, value);
    } else if (cookieStr.indexOf(',') > -1) {
      return this._cookieStringSplitter(cookieStr, /, ?/).map((cookieStrPart) => this._parseIntoTuple(cookieStrPart));
    } else {
      return new CookieTuple(cookieStr.substring(0, firstIndexOfEquals), cookieStr.substring(firstIndexOfEquals + 1));
    }
  }

  /**
   * It takes an array of cookie tuples and returns a map of key-value pairs
   * @param {CookieTuple[]} cookieTuples - An array of objects that contain the key and value of the cookie.
   * @return {Map<String, String>} A map of the cookie key and value.
   */
  static _getCookieMap(cookieTuples) {
    return cookieTuples.reduce((map, cookie) => {
      map.set(cookie.key, cookie.val);
      return map;
    }, new Map());
  }

  /**
   * It takes an array of strings, each of which is a cookie string, and returns an array of cookie tuples.
   * @param {String} splitCookies - An array of strings, each string is a cookie.
   * @return {CookieTuple[]} An array of tuples.
   */
  static _getCookieTupleArray(splitCookies) {
    return splitCookies.flatMap((cookie) => this._parseIntoTuple(cookie)).filter((tuple) => tuple);
  }

  /**
   * It splits a string into an array of strings, using a regular expression as the delimiter
   * @param {String} cookieStr - The string of cookies to split.
   * @param {RegExp} delimiterRegex - The regular expression used to split the cookie string.
   * @return {String[]} An array of strings
   */
  static _cookieStringSplitter(cookieStr, delimiterRegex) {
    return cookieStr
      .split(delimiterRegex)
      .map((str) => str.trim())
      .filter((str) => str.length > 0);
  }
}

module.exports = CookieToMap;
