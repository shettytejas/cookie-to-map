const Base = require('./src/base');
const CookieToMap = require('./src/cookie-to-map');

module.exports = class extends Base {
  /**
   * It takes a string of cookies and returns a map of the cookies
   * @param {String} cookieStr - The string of cookies to parse.
   * @return {Map<String, String>} A map of the cookie key and value.
   */
  static parseCookieString(cookieStr) {
    return CookieToMap._parseCookies(cookieStr);
  }
};
