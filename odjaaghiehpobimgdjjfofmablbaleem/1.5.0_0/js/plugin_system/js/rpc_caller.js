/**
 * An RpcCaller can invoke methods on a remote RpcCallee. For that it uses a
 * Sender implementation to send Messages over an RPC connection.
 * @param {Sender} sender The sender used to send RPC invocation messages.
 * @constructor
 */
var RpcCaller = function(sender) {
  this.sender_ = sender;
  this.state_ = RpcCaller.STATES.INITIALIZING;
  if (typeof this.sender_ === 'undefined')
    throw 'Sender not set.';
};

/**
 * Type indicating the state of the RpcCaller.
 * @enum {number}
 */
RpcCaller.STATES = {
  INITIALIZING: 0,
  READY: 1
};

/**
 * Disconnects the connected sender.
 */
RpcCaller.prototype.disconnect = function() {
  this.sender_.disconnect();
};

/**
 * Returns the description of the interfaces offered by the RpcCallee.
 * @return {String} The interface description.
 * @private
 */
RpcCaller.prototype.getInterfaceDescription_ = function() {
  return this.interfaceDescription_;
};

/**
 * Downloads the interface description from the RpcCallee. The supplied callback
 * |onDownloadComplete| is invoked when the download finishes.
 * @param {function(RpcCaller)} onDownloadComplete Callback invoked when the
 *       interface description download finishes.
 * @private
 */
RpcCaller.prototype.downloadInterface_ = function(onDownloadComplete) {
  var self = this;
  this.sender_.sendMessage(createInterfaceRequest(), function(response) {
    if (!response.hasOwnProperty('type') ||
        response.type !== 'InterfaceResponse')
      throw 'Malformed InterfaceResponse';
    self.interfaceDescription_ = response.description;
    self.state_ = RpcCaller.STATES.READY;
    onDownloadComplete(self);
  });
};

/**
 * Checks whether the RpcCaller is ready for method invocations.
 * @return {Boolean} Returns true if the interface description has been
 *     successfully downloaded and the RpcCaller is ready for method
 *     invocations.
 */
RpcCaller.prototype.isReady = function() {
  return (this.state_ === RpcCaller.STATES.READY);
};

/**
 * Invokes |methodName| on the RpcCallee passing in |parameters|.
 * @param {String} methodName The name of the method to be invoked.
 * @param {Object} parameters The invocation parameters.
 * @return {Promise<InvokeResponse>} Returns an invocations ResponseMessage.
 */
RpcCaller.prototype.invoke = function(methodName, parameters) {
  var self = this;
  return new Promise(function(resolve, reject) {
    self.sender_.sendMessage(createInvokeRequest(methodName, parameters || {}),
                             function(invokeResponse) {
      resolve(invokeResponse);
    });
  });
};

/**
 * Invokes |methodName| on the RpcCallee passing in |parameters|. This method
 * uses above invoke() method to craft and send the invocation method. When the
 * asynchronous call returns, checks whether the invocation was successful and
 * either fulfills the promise with the return value of the method or rejects
 * it with the error message.
 * @param {String} methodName The name of the method to be invoked.
 * @param {Object} parameters The invocation parameters.
 * @return {Promise<Object>} Returns the return value of the invoked method.
 */
RpcCaller.prototype.invokeMethod = function(methodName, parameters) {
  var self = this;
  return new Promise(function(resolve, reject) {
    self.invoke(methodName, parameters).then(function(invokeResponse) {
      // TODO(cschuet): perform result validation.
      if (!invokeResponse.success) {
        reject(invokeResponse.error);
        return;
      }
      resolve(invokeResponse.result);
    });
  });
};

/**
 * Returns the sender id.
 * @return {String} The id of the sender.
 */
RpcCaller.prototype.getId = function() {
  return this.sender_.getId();
};

/**
 * Checks whether the interface described by |interfaceDescription| is
 * implemented by the RpcCallee.
 * @param {Object} interfaceDescription Description of the interface.
 * @return {Boolean} Returns true if the interface is implemented by the
 *     RpcCallee. Otherwise, returns false.
 */
RpcCaller.prototype.isInterfaceImplemented = function(interfaceDescription) {
  if (!this.hasOwnProperty('interfaceDescription_'))
    throw 'Interface description not set.';
  return InterfaceUtils.implementsInterface(this.interfaceDescription_,
      interfaceDescription);
};
