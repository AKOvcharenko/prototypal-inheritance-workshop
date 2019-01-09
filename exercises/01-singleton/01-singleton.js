/**
 * TODO: create a constructor named `Singletone`
 */

var Singleton = (function creator() {
  var instance;
  return function () {
    if (!instance) {
      instance = this;
      return this;
    }
    return instance;
  }
})();

module.exports = Singleton;
