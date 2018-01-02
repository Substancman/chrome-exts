/**
 * PluginProxy
 * @param {RpcCaller} rpcCaller
 * @constructor
 */
var PluginProxy = function(rpcCaller) {
  this.rpcCaller_ = rpcCaller;
  if (typeof this.rpcCaller_ === 'undefined')
    throw 'RpcCaller not set.';
  this.decorate_();
};

/**
 * Conveniently adds member functions with the name of the RPC methods to this
 * PluginProxy which forward invocations to the RpcCaller.
 * @private
 */
PluginProxy.prototype.decorate_ = function() {
  // add some syntactic sugar
  var self = this;
  for (var methodName in this.rpcCaller_.interfaceDescription_) {
    (function(m) {
      // Make sure no previously defined method is overwritten.
      if (self.hasOwnProperty(m)) {
        throw 'Cannot redefine ' + m + ' for PluginProxy.';
        return;
      }
      self[m] = self.rpcCaller_.invokeMethod.bind(self.rpcCaller_, m);
    })(methodName);
  }
};

/**
 * Returns the id of the RpcCaller.
 * @return {string} Id of the RpcCaller.
 */
PluginProxy.prototype.getId = function() {
  return this.rpcCaller_.getId();
};

/**
 * Returns the names of the interfaces that the remote plugin implements.
 * @return {Array<String>} Names of the interfaces the remote plugin implements.
 */
PluginProxy.prototype.getInterfaces = function() {
  var interfaces = [];
  for (var version in PluginInterfaces)
    if (this.rpcCaller_.isInterfaceImplemented(PluginInterfaces[version]))
      interfaces.push(version);
  return interfaces;
};
