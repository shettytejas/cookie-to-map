const CookieTuple = require('../../src/cookie-tuple');
const expect = require('chai').expect;

describe("CookieTuples's", () => {
  context('#constructor() and #key() / #val() getters', () => {
    it('should return a CookieTuple object with key-value set to the given key and value (strings)', () => {
      const newTuple = new CookieTuple('key', 'value');

      expect(newTuple.key).to.be.eql('key');
      expect(newTuple.val).to.be.eql('value');
    });

    it('should return a CookieTuple object with key-value set as "undefined" to the given key and value (undefined given)', () => {
      const newTuple = new CookieTuple(undefined, undefined);

      expect(newTuple.key).to.be.eql('undefine');
      expect(newTuple.val).to.be.eql('undefined');
    });
  });

  context('#toString()', () => {
    it('should return a cookie string of key-value pair', () => {
      const newTuple = new CookieTuple('key', 'value');

      expect(newTuple.toString()).to.be.eql('key=value; ');
    });
  });
});
