/**
 * TODO: object's method toString should returns `Big Brother watching You! ${default method result}`
 */

Object.prototype.toString = (function (old) {
  return  function () {
    return 'Big Brother watching You! ' + old.call(this);
  };
})(Object.prototype.toString);

module.exports = Object;


/*
* TODO: Add to the prototype of all functions the method defer(ms), that runs the function after ms milliseconds.
*
* https://plnkr.co/edit/rGY3uNRBYiNJPsgi99OA?p=preview
* solution https://plnkr.co/edit/VQ4Xreq4uc3t5ji5KmDr?p=preview
* */


