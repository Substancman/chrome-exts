/**
 * @typedef {function(function(String, Object, RpcResponder),
 *     function(RpcCalleeState, RpcCallee)):RpcCallee} RpcCalleeFactory
 */

/**
 * Plugin
 * @param {String} pluginVersion
 * @param {RpcCalleeFactory} rpcCalleeFactory
 * @constructor
 */
var Plugin = function(pluginVersion, rpcCalleeFactory) {
  this.pluginVersion_ = pluginVersion;
  if (!PluginInterfaces.hasOwnProperty(this.pluginVersion_))
    throw 'Unknown plugin version ' + this.pluginVersion_;
  this.methods_ = {};
  this.rpcCallee_ = rpcCalleeFactory(this.delegator_.bind(this),
                                     this.onStateChange_.bind(this));
};

/**
 * Registers the RPCCallee as a callee with the calling endpoint.
 */
Plugin.prototype.register = function() {
  this.rpcCallee_.register(PluginInterfaces[this.pluginVersion_]);
};

/**
 * Deregisters the RPCCallee from the calling endpoint.
 */
Plugin.prototype.deregister = function() {
  this.rpcCallee_.deregister();
};

/**
 * This method is responsible for delegating incoming message invocations to the
 * implementing function.
 * @param {string} methodName The name of method to be invoked.
 * @param {Object} parameters Dictionary of named invocation parameters.
 * @param {RPCResponder} rpcResponder The RPCResponder used to send a reply to
 *     the caller.
 * @return {boolean} Returns true, if the implementing function was successfully
 *     invoked. Otherwise, returns false.
 * @private
 */
Plugin.prototype.delegator_ = function(methodName, parameters, rpcResponder) {
  if (!this.methods_.hasOwnProperty(methodName) ||
      typeof this.methods_[methodName] !== 'function') {
    console.log('Method ' + methodName + ' not implemented.');
    rpcResponder.sendError('Method ' + methodName + ' not implemented.');
    return false;
  }

  // Call and send result.
  var result = this.methods_[methodName](parameters);
  return rpcResponder.sendSuccess(result);
};

/**
 * State change callback stub.
 * @param {RpcCalleeState} rpcCalleeState The new state of the RPC connection.
 * @param {RPCCallee} rpcCallee The RPCCallee that state has changed.
 * @private
 */
Plugin.prototype.onStateChange_ = function(rpcCalleeState, rpcCallee) {};

/**
 * Returns the id of the RPCCallee.
 * @return {number} Id of the RPCCallee.
 */
Plugin.prototype.getId = function() {
  return this.rpcCallee_.getId();
};
