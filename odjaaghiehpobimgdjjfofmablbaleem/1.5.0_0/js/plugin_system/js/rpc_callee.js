/**
 * Send the error message |error| using the send function |sendResponse|.
 * @param {function(Message)} sendResponse Function to send the Message.
 * @param {String} error An error message.
 */
var sendError = function(sendResponse, error) {
  sendResponse({
    success: false,
    error: error
  });
};

/**
 * Use RpcResponders to send success and error message over the RPC connection.
 * @param {function(Message)} sendResponse Callback for returning the result.
 * @param {String} expectedType The expected type of the return result.
 * @constructor
 */
var RpcResponder = function(sendResponse, expectedType) {
  var self = this;

  // Member function invoked when successful method invocation along with a
  // potential return value should be send over the RPC connection. Note that
  // this method can handle both synchronous and asynchronous calls, as it
  // checks the type of the return value. For asynchronous methods, the return
  // value is of type promise and this method waits for the promise to be
  // fulfilled before sending the response.
  this.sendSuccess = function(result) {
    var checkAndSendResult = function(result, expectedType) {
      if (!Utils.hasType[expectedType](result)) {
        self.sendError('Result is not of expected type ' + expectedType);
      } else {
        sendResponse({
          success: true,
          result: result
        });
      }
    };

    if (Utils.hasType['promise'](result)) {
      // asynchronous
      result.then(function(value) {
        checkAndSendResult(value, expectedType);
      }, function(error) {
        self.sendError('Method invocation failed: ' + error);
      });
      return true;
    } else {
      // synchronous
      checkAndSendResult(result, expectedType);
      return false;
    }
  };

  // Member function invoked when method invocation failed.
  this.sendError = sendError.bind(this, sendResponse);
};

/**
 * The connection state of the RPC connection.
 * @param {Boolean} connected Indicates whether the connection is established.
 * @param {String} error The error msg if a connection failed to establish.
 * @constructor
 */
var RpcCalleeState = function(connected, error) {
  this.connected = connected;
  this.error = error;
};

/**
 * @typedef {function(function(Message,function(Message)),
                    function(ReceiverState):Receiver)} ReceiverFactory
 */

/**
 * An RpcCaller can invoke methods on a remote RpcCallee. For that the RpcCallee
 * has an Receiver that establishes a connection to a Hub when registering the
 * callee.
 * @param {ReceiverFactory} receiverFactory A factory function to create
 *     Receivers.
 * @param {function(String, Object, RpcResponder)} delegator A function that is
 *     called for the actualy message invocation.
 * @param {function(RpcCallee, RpcCalleeState)} onStateChange Callback invoked
 *     when the connection state of the RpcCallee changes.
 * @constructor
 */
var RpcCallee = function(receiverFactory, delegator, onStateChange) {
  this.receiver_ = receiverFactory(this.onStateChange_.bind(this),
                                   this.onMessage_.bind(this));
  this.state_ = new RpcCalleeState(false, undefined);
  if (typeof this.receiver_ === 'undefined')
    throw 'Receiver not set.';
  this.delegator_ = delegator;
  this.onStateChangeHandler_ = onStateChange;
  if (typeof this.delegator_ !== 'function')
    throw 'Not a proper delegator.';
  this.handlers_ = {
    InterfaceRequest: RpcCallee.prototype.onInterfaceRequest_.bind(this),
    InvokeRequest: RpcCallee.prototype.onInvokeRequest_.bind(this)
  };
};

/**
 * Returns the id of the Receiver.
 * @return {String} Id of the receiver.
 */
RpcCallee.prototype.getId = function() {
  return this.receiver_.getId();
};

/**
 * Registers the RpcCallee with the RpcHub.
 * @param {Object} interfaceDescription Description of the interface offered by
 *     this RpcCallee.
 */
RpcCallee.prototype.register = function(interfaceDescription) {
  if (typeof this.interfaceDescription_ !== 'undefined') {
    console.log('RpcCallee already registered. Ignoring.');
    return;
  }
  this.interfaceDescription_ = interfaceDescription;
  this.receiver_.connect();
};

/**
 * Deregisters this RpcCallee from the RpcHub.
 */
RpcCallee.prototype.deregister = function() {
  this.receiver_.disconnect();
};

/**
 * Checks whether |invokeRequest| is a valid method invocation request for the
 * interfaces offered by RpcCallee.
 * @param {InvokeRequest} invokeRequest The method invocation request Message.
 * @param {Object} methodDescription Description of the method to be invoked.
 * @param {RpcResponder} rpcResponder RpcResponder for sending back the result.
 * @param {Object} validated_parameters Out parameter to return the validated
 *     parameters.
 * @return {Boolean} Returns true if the invocation request is valid. Otherwise,
 *     returns false.
 * @private
 */
RpcCallee.prototype.validateRequest_ = function(invokeRequest,
    methodDescription, rpcResponder, validated_parameters) {
  // check parameters
  for (var parameterName in methodDescription.parameters) {
    var type = methodDescription.parameters[parameterName];

    // valid type field?
    if (!Utils.hasType.hasOwnProperty(type)) {
      rpcResponder.sendError('Unknown type ' + type + ' for parameter ' +
          parameterName);
      return false;
    }

    // parameter set?
    if (!invokeRequest.parameters.hasOwnProperty(parameterName)) {
      rpcResponder.sendError('Missing required parameter ' +
          parameterName);
      return false;
    }

    // type ok?
    if (!Utils.hasType[type](invokeRequest.parameters[parameterName])) {
      rpcResponder.sendError('Parameter ' + parameterName +
          ' is not of expected type ' + type);
      return false;
    }

    validated_parameters[parameterName] =
        invokeRequest.parameters[parameterName];
  }

  return true;
};

/**
 * Handler for invocation requests.
 * @param {InvokeRequest} invokeRequest The invocation request Message.
 * @param {function(Message)} sendResponse Callback for sending the result.
 * @return {Boolean} Returns true if the method was successfully invoked.
 *     Otherwise, returns false.
 * @private
 */
RpcCallee.prototype.onInvokeRequest_ = function(invokeRequest, sendResponse) {

  // Validate request structure.
  if (!invokeRequest.hasOwnProperty('method'))
    throw 'Malformed InvokeRequest: method field not set.';
  if (!invokeRequest.hasOwnProperty('parameters'))
    throw 'Malformed InvokeRequest: parameters field not set.';
  if (typeof invokeRequest.parameters !== 'object')
    throw 'Malformed InvokeRequest: parameters field does not contain object.';

  if (!this.interfaceDescription_ ||
      !this.interfaceDescription_.hasOwnProperty(invokeRequest.method)) {
    sendError(sendResponse, 'Unknown method ' + invokeRequest.method);
    return false;
  }

  var methodDescription = this.interfaceDescription_[invokeRequest.method];
  var rpcResponder = new RpcResponder(sendResponse,
      methodDescription['result']);

  if (!methodDescription.hasOwnProperty('parameters')) {
    rpcResponder.sendError('Invalid method description for method ' +
        invokeRequest.method);
    return false;
  }

  var validated_parameters = {};

  // Validate request contents.
  if (!this.validateRequest_(invokeRequest, methodDescription, rpcResponder,
      validated_parameters))
    return false;

  // Forward the call to the delegator. Returns true if the call is
  // asynchronous.
  return this.delegator_(invokeRequest.method,
                         validated_parameters,
                         rpcResponder);
};

/**
 * Handler for interface querying requests.
 * @param {InterfaceRequest} interfaceRequest The interface request Message.
 * @param {function(Message)} sendResponse Callback for sending the result.
 * @return {Boolean} Returns true if the interface query was successfully
 *     handled. Otherwise, returns false.
 * @private
 */
RpcCallee.prototype.onInterfaceRequest_ =
    function(interfaceRequest, sendResponse) {
  if (typeof this.interfaceDescription_ === 'undefined') {
    console.log('InterfaceRequest failed.');
    return false;
  }
  var interfaceResponse = createInterfaceResponse(this.interfaceDescription_);
  sendResponse(interfaceResponse);
  return true;
};

/**
 * Handler for incoming messages. Dispatches to the message type specific
 *     handler.
 * @param {Message} message The incoming message.
 * @param {function(Message)} sendResponse Callback for sending the result.
 * @return {Boolean} Returns true if the message was successfully handled.
 *     Otherwise, returns false.
 * @private
 */
RpcCallee.prototype.onMessage_ = function(message, sendResponse) {
  if (!message.hasOwnProperty('type') ||
      !this.handlers_.hasOwnProperty(message.type)) {
    throw 'Unknown message type: ' + message.type;
  }
  // Handlers should return 'false' if they handle the message synchronously,
  // 'true' otherwise.
  return this.handlers_[message.type](message, sendResponse);
};

/**
 * Handler for receiver connection state changes.
 * @param {ReceiverState} receiverState The new connection state.
 * @private
 */
RpcCallee.prototype.onStateChange_ = function(receiverState) {
  this.state_ = new RpcCalleeState(receiverState.connected,
                                   receiverState.error);
  if (typeof this.onStateChangeHandler_ === 'function')
    this.onStateChangeHandler_.call(null, this, this.state_);
};
