/**
 * @constructor
 */
var InterfaceRequest = function() {
  this.type = 'InterfaceRequest';
};

/**
 * Constructs an InterfaceResponse for an interface described by|description|.
 * @param {string} description The interface description
 * @constructor
 */
var InterfaceResponse = function(description) {
  this.type = 'InterfaceResponse';
  this.description = description;
};

/**
 * Constructs an InvokeRequest for a method named |method| and parameters
 * |parameters|.
 * @param {string} method
 * @param {Object} parameters Dictionary of named invocation parameters.
 * @constructor
 */
var InvokeRequest = function(method, parameters) {
  this.type = 'InvokeRequest';
  this.method = method;
  this.parameters = parameters;
};

/**
 * Static factories for InterfaceRequest/InterfaceResponse.
 */

/**
 * @return {InterfaceRequest}
 */
var createInterfaceRequest = function() {
  return new InterfaceRequest();
};

/**
 * @param {Object} description The interface description.
 * @return {InterfaceResponse}
 */
var createInterfaceResponse = function(description) {
  return new InterfaceResponse(description);
};

/**
 * @param {String} method The name of the method to be invoked.
 * @param {Object} parameters A dictionary of parameters.
 * @return {InvokeRequest}
 */
var createInvokeRequest = function(method, parameters) {
  return new InvokeRequest(method, parameters);
};
