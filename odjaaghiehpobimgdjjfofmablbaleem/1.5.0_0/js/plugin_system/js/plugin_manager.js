/**
 * PluginManager
 * @param {function(PluginProxy)} onPluginConnect
 * @param {function(PluginProxy)} onPluginDisconnect
 * @constructor
 */
var PluginManager = function(onPluginConnect, onPluginDisconnect) {
  this.onPluginConnect_ = onPluginConnect;
  this.onPluginDisconnect_ = onPluginDisconnect;

  this.rpcHub_ = new RpcHub(this.onRpcConnect_.bind(this),
                            this.onRpcDisconnect_.bind(this));
  this.pluginProxies_ = {};
};

/**
 * This method is invoked, when an RPCCaller connects to the PluginManager.
 * @param {RPCCaller} rpcCaller The RPCCaller that connected.
 * @private
 */
PluginManager.prototype.onRpcConnect_ = function(rpcCaller) {
  var pluginProxy = new PluginProxy(rpcCaller);
  this.pluginProxies_[pluginProxy.getId()] = pluginProxy;

  // Invoke onConnect handler.
  if (typeof this.onPluginConnect_ === 'function')
    this.onPluginConnect_.call(null, pluginProxy);
};

/**
 * This method is invoked, when an RPCCaller disconnects from the PluginManager.
 * @param {RPCCaller} rpcCaller The RPCCaller that disconnected.
 * @private
 */
PluginManager.prototype.onRpcDisconnect_ = function(rpcCaller) {
  var id = rpcCaller.getId();
  var pluginProxy = this.pluginProxies_[id];
  delete this.pluginProxies_[id];

  // Invoke onDisconnect handler.
  if (typeof this.onPluginDisconnect_ === 'function') {
    this.onPluginDisconnect_.call(null, pluginProxy);
  }
};

/**
 * Creates plugin factory for plugins connected via a local (loopback) RPC
 * connection.
 * @param {function(RpcCalleeFactory):Plugin} pluginConstructor The plugin
 *     constructor.
 * @param {Array.<Object>} constructorArguments An array of arguments that will
 *     be passed to the constructor on invocation.
 * @return {function():Plugin} Returns the fully bound plugin factory function.
 */
PluginManager.prototype.createLocalPlugin = function(pluginConstructor,
    constructorArguments) {
  var self = this;
  var arguments = constructorArguments || [];
  var F = function() {
    var args = [self.rpcHub_.createLocalRpcCallee.bind(self.rpcHub_)].concat(
        arguments);
    return pluginConstructor.apply(this, args);
  };
  F.prototype = pluginConstructor.prototype;
  return new F();
};

/**
 * Retrieves an array of plugin names given their plugin ids.
 * @param {Array.<string>} ids An array of plugin ids.
 * @return {Promise<Array.<string>>} Returns an array of plugin names.
 */
PluginManager.prototype.getPluginNames = function(ids) {
  var self = this;
  return new Promise(function(resolve) {
    var pluginNames = {};
    var promise = self.rpcHub_.invokeOnSome(ids, 'getName', {});
    promise.then(function(invocationResponses) {
      for (var id in invocationResponses) {
        if (invocationResponses[id].success) {
          pluginNames[id] = invocationResponses[id].result;
        }
      }
      resolve(pluginNames);
    });
  });
};

/**
 * Given a |url| retrieves an array of plugin id, whose plugin feel they can
 * handle the content url. Each plugin has at most |timeout| to reply to the
 * request, otherwise it is considered to be unable to handle the |url|.
 * @param {String} url The content url for which plugins are requested.
 * @param {Integer} timeout A timeout in ms after which the plugin must have
 *     responded to the request.
 * @return {Promise<Array.<String>>} Returns an array of ids of responsible
 *     plugins.
 */
PluginManager.prototype.getResponsiblePlugins = function(url, timeout) {
  var self = this;
  return new Promise(function(resolve) {
    var responsiblePlugins = [];
    var promise = self.rpcHub_.invokeOnAll('isResponsible', { url: url },
        timeout);
    promise.then(function(invocationResponses) {
      for (var id in invocationResponses) {
        if (invocationResponses[id].success && invocationResponses[id].result) {
          responsiblePlugins.push(id);
        }
      }
      resolve(responsiblePlugins);
    });
  });
};

/**
 * Tells the plugin with |id| to open its UI for the user. |url| contains the
 * content url for which the plugin will be responsible.
 * @param {String} id The plugin id.
 * @param {String} url The content url.
 * @return {Promise<string>} Returns the content url the plugin generated.
 */
PluginManager.prototype.openUI = function(id, url) {
  return this.pluginProxies_[id].openUI({ url: url });
};
