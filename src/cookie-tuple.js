/** It's a class that represents a key-value pair of a cookie */
class CookieTuple {
  /**
   * @type {String}
   */
  #key;
  /**
   * @type {String}
   */
  #val;

  /**
   * The constructor function is a special function that is called when a new object is created
   * @param {String} key - The key of the entry.
   * @param {String} val - The value of the key.
   */
  constructor(key, val) {
    this.#key = decodeURIComponent(key);
    this.#val = decodeURIComponent(val);
  }

  /**
   * The function returns the value of the private variable #key
   * @return {String} The key property of the object.
   */
  get key() {
    return this.#key;
  }

  /**
   * The function returns the value of the private variable val
   * @return {String}  The value of the private variable #val
   */
  get val() {
    return this.#val;
  }

  /**
   * The toString() function returns a string representation of the object
   * @return {String} The key and value of the cookie.
   */
  toString() {
    return `${this.key}=${this.val}; `;
  }
}

module.exports = CookieTuple;
