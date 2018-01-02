/**
 * RpcCallee registers with the RpcHub to advertise their interfaces. On the
 * RpcHub side, this connection is represented by an RpcCaller.
 * @param {function(RpcCaller)} onConnect Callback invoked when an RpcCallee
 *     registers with the RpcHub.
 * @param {function(RpcCaller)} onDisconnect Callback invoked when an RpcCallee
 *     deregisters from the RpcHub.
 * @constructor
 */
var RpcHub = function(onConnect, onDisconnect) {
  this.onConnect_ = onConnect;
  this.onDisconnect_ = onDisconnect;
  this.hub_ = new Hub(this.onReceiverConnect_.bind(this),
                      this.onReceiverDisconnect_.bind(this));
  this.rpcCallers_ = {};
};

/**
 * Disconnects an RpcCaller from the hub.
 * @param {RpcCaller} rpcCaller The RpcCaller to disconnect.
 */
RpcHub.prototype.disconnect = function(rpcCaller) {
  rpcCaller.disconnect();
};

/**
 * Method invoked on an incoming connection. The RpcHub side of connection is
 * represented by the |sender|.
 * @param {Sender} sender The sender representing the RPC connection.
 * @private
 */
RpcHub.prototype.onReceiverConnect_ = function(sender) {
  var rpcCaller = new RpcCaller(sender);
  rpcCaller.downloadInterface_(this.onInterfaceDownloadComplete.bind(this));
};

/**
 * Method invoked when the interface download for the |rpcCaller| finishes.
 * @param {RpcCaller} rpcCaller The RpcCaller for which the interface download
 *     finished.
 */
RpcHub.prototype.onInterfaceDownloadComplete = function(rpcCaller) {
  this.rpcCallers_[rpcCaller.getId()] = rpcCaller;
  if (typeof this.onConnect_ === 'function')
    this.onConnect_.call(null, rpcCaller);
};

/**
 * Method invoked when the RPC connection for |sender| terminates.
 * @param {Sender} sender The sender whose RPC connection terminated.
 * @private
 */
RpcHub.prototype.onReceiverDisconnect_ = function(sender) {
  var id = sender.getId();
  var rpcCaller = this.rpcCallers_[id];
  delete this.rpcCallers_[id];
  if (typeof this.onDisconnect_ === 'function')
    this.onDisconnect_.call(null, rpcCaller);
};

/**
 * Creates a local RpcCallee.
 * @param {function(string, Object, RpcResponder)} delegator The delegator for
 *     method invocation.
 * @param {function(RpcCalleeState, RpcCallee)} onStateChange Callback invoked
 *     when the connection state of the RpcCallee changes.
 * @return {RpcCallee} Returns the fully constructed, yet unregistered\
 *     RpcCallee.
 */
RpcHub.prototype.createLocalRpcCallee =
    function(delegator, onStateChange) {
  return new RpcCallee(
      this.hub_.createLocalReceiver.bind(this.hub_),
      delegator,
      onStateChange);
};

/**
 * Convenience method for invoking the method |methodName| with |parameters| on
 * the RpcCallee identified by |ids|. If a RpcCallee does not return before
 * |timeout| ms the invocation is considered to habe failed.
 * @param {Array.<string>} ids RpcCallee ids to invoked the method on.
 * @param {string} methodName Method name to invoke.
 * @param {Object} parameters Parameters to pass to the method.
 * @param {Number} timeout Maximum time for method invocation.
 * @return {Promise<Object>} Returns a dictionary that maps RpcCallee id to
 *     the return value.
 */
RpcHub.prototype.invokeOnSome = function(ids, methodName, parameters, timeout) {
  if (typeof timeout === 'undefined')
    timeout = 500;

  var self = this;
  return new Promise(function(resolve, reject) {
    var pending = [];
    var promises = {};
    var invocationResponses = {};

    // No plugin should take longer than |timeout| ms.
    var timer = setTimeout(function() {
      resolve(invocationResponses);
    }, timeout);

    // Start the invocations.
    ids.forEach(function(id) {
      promises[id] = self.rpcCallers_[id].invoke(methodName, parameters);
      pending.push(id);
    });

    // If no invocation was started return immediately.
    if (pending.length === 0)
      resolve(invocationResponses);


    // Check for completion and resolve if all completed.
    ids.forEach(function(id) {
      promises[id].then(function(invocationResponse) {
        invocationResponses[id] = invocationResponse;
        Utils.removeFromArray(pending, id);
        if (pending.length === 0) {
          clearTimeout(timer);
          resolve(invocationResponses);
        }
      });
    });
  });
};

/**
 * Convenience method for invoking the method |methodName| with |parameters| on
 * all registered RpcCallees. If a RpcCallee does not return before |timeout| ms
 * the invocation is considered to have failed.
 * @param {string} methodName Name of the method to invoke.
 * @param {Object} parameters Parameters to pass to the method.
 * @param {Number} timeout Maximum time for invocation.
 * @return {Promise<Object>} Returns a dictionary mapping RpcCallee id to the
 *     return value.
 */
RpcHub.prototype.invokeOnAll = function(methodName, parameters, timeout) {
  return this.invokeOnSome(Object.keys(this.rpcCallers_),
      methodName, parameters, timeout);
};
