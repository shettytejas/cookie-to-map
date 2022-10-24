/** Base Class. */
module.exports = class {
  /**
   * If you try to call this constructor, throw an error.
   */
  constructor() {
    throw new Error('cannot call private constructor.');
  }
};
