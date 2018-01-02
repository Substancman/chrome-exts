/**
 * DrivePlugin
 * @param {RpcCalleeFactory} rpcCalleeFactory The RpcCalleeFactory.
 * @constructor
 * @extends {Plugin}
 */
var DrivePlugin = function(rpcCalleeFactory) {
  Plugin.call(this, '1.0', rpcCalleeFactory);
  this.methods_['getName'] = this.getName.bind(this);
  this.methods_['isResponsible'] = this.isResponsible.bind(this);
  this.methods_['openUI'] = this.openUI.bind(this);
  console.log('Drive Presentation Plugin instantiated.');
};

DrivePlugin.prototype = Object.create(Plugin.prototype);

/**
 * The constructor of the DrivePlugin.
 * @type {Function}
 * @see http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
 */
DrivePlugin.prototype.constructor = DrivePlugin;

/**
 * @return {string} Returns the name of the plugin.
 */
DrivePlugin.prototype.getName = function() {
  return 'Presentation Options';
};

/**
 * @param {Object} parameters
 * @return {boolean} Returns true if DrivePlugin is responsible for the url in
 *     |parameters.url|.
 */
DrivePlugin.prototype.isResponsible = function(parameters) {
  var regExp =
      /^.*docs.google.com.*\/presentation\/(.\/|embed\?id=)(.*?)($|\/|&).*/;
  var match = parameters.url.match(regExp);
  return !!match;
};

/**
 * @param {Object} parameters
 * @return {Promise.<string>} Returns the url
 */
DrivePlugin.prototype.openUI = function(parameters) {
  return new Promise(function(resolve, reject) {
    chrome.app.window.create('plugins/drive/ui.html', {},
      function(createdWindow) {
        createdWindow.contentWindow.resolve = resolve;
        createdWindow.contentWindow.url_typed = parameters.url;
    });
  });
};
