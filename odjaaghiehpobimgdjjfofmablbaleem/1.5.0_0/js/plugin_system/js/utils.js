var Utils = {};

/**
 * A dictionary which maps a field type string to a boolean function which
 * checks whether the only argument to that function is of the specified type.
 */
Utils.hasType = {
  'array': function(x) { return Array.isArray(x); },
  'boolean': function(x) { return typeof x === 'boolean'; },
  'function': function(x) { return x instanceof Function; },
  'integer': function(x) { return typeof x === 'number' && x % 1 === 0; },
  'number': function(x) { return typeof x === 'number' && !isNaN(x); },
  'null': function(x) { return x === null; },
  'object': function(x) {
    return x && typeof x === 'object' && !Array.isArray(x);
  },
  'promise': function(x) { return x instanceof Promise; },
  'string': function(x) { return typeof x === 'string'; },
  'undefined': function(x) { return typeof x === 'undefined'; }
};

/**
 * Removes elements from an array.
 * @param {Array.<Object>} arr The array to remove items from.
 * @param {...*} var_args The items to remove.
 * @return {Array.<Object>} The array with the items removed.
 */
Utils.removeFromArray = function(arr, var_args) {
  var length = arguments.length;
  while (length > 1 && arr.length > 0) {
    var what = arguments[--length];
    var i;
    while ((i = arr.indexOf(what)) !== -1) {
      arr.splice(i, 1);
    }
  }
  return arr;
};
