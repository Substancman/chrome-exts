/**
 * This file contains a collection of functions useful for determining whether
 * a method is part of an interface or whether a class implements an interface.
 */
var InterfaceUtils = {};


/*
EXAMPLE for a method description:

methodDescription = {
  parameters: {
    x: 'number',
    y: 'number'
  },
  result: 'number'
};

An interface description is a dictionary of method descriptions keyed on the
method name.

EXAMPLE for an interface description:

interfaceDescription: {
  add: {
    parameters: {
      x: 'Number',
      y: 'Number'
    },
    result: 'Number'
  }
}
*/

/**
 * Checks whether the method |methodName| described by |methodDescription| is
 * part of the interface described by |interfaceDescription|.
 * @param {String} methodName Name of the method.
 * @param {Object} methodDescription Method description, see above.
 * @param {Object} interfaceDescription Interface description, see above.
 * @return {Boolean} Returns true if the method is part of the interface.
 *     Otherwise, returns false.
 * @private
 */
InterfaceUtils.isInterfaceMethod_ =
    function(methodName, methodDescription, interfaceDescription) {
  if (!interfaceDescription.hasOwnProperty(methodName))
    return false;
  var interfaceMethod = interfaceDescription[methodName];
  if (!methodDescription.hasOwnProperty('parameters') ||
      !interfaceMethod.hasOwnProperty('parameters'))
    return false;
  for (var name in interfaceMethod.parameters) {
    if (!methodDescription.parameters.hasOwnProperty(name) ||
        interfaceMethod.parameters[name] !== methodDescription.parameters[name])
      return false;
  }

  if (interfaceMethod.hasOwnProperty('result')) {
    if (!methodDescription.hasOwnProperty('result') ||
        methodDescription.result !== interfaceMethod.result)
      return false;
  }
  return true;
};

/**
 * Determines whether the method described by |description| is implemented by
 * the interface described by |interfaceDescription|.
 * @param {string} description A method description, see above.
 * @param {string} interfaceDescription An interface description, see above.
 * @return {Boolean} Returns true, if the method described by |description| is
 *                   implemented by the interface described by
 *                   |interfaceDescription|.
 */
InterfaceUtils.implementsInterface = function(description,
    interfaceDescription) {
  for (var methodName in interfaceDescription) {
    if (!description.hasOwnProperty(methodName) ||
        !InterfaceUtils.isInterfaceMethod_(methodName,
                                           description[methodName],
                                           interfaceDescription)) {
      return false;
    }
  }
  return true;
};
