/**
 * YoutubePlugin
 * @param {RpcCalleeFactory} rpcCalleeFactory The RpcCalleeFactory.
 * @constructor
 * @extends {Plugin}
 */
var YoutubePlugin = function(rpcCalleeFactory) {
  Plugin.call(this, '1.0', rpcCalleeFactory);
  this.methods_['getName'] = this.getName.bind(this);
  this.methods_['isResponsible'] = this.isResponsible.bind(this);
  this.methods_['openUI'] = this.openUI.bind(this);
};

YoutubePlugin.prototype = Object.create(Plugin.prototype);

/**
 * The constructor of the DrivePlugin.
 * @type {Function}
 * @see http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
 */
YoutubePlugin.prototype.constructor = YoutubePlugin;

/**
 * @return {string} Returns the name of the plugin.
 */
YoutubePlugin.prototype.getName = function() {
  return 'Advanced Youtube Configuration';
};

/**
 * @param {Object} parameters
 * @return {boolean} Returns true if DrivePlugin is responsible for the url in
 *     |parameters.url|.
 */
YoutubePlugin.prototype.isResponsible = function(parameters) {
  var regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = parameters.url.match(regExp);
  return !!match;
};

/**
 * @param {Object} parameters
 * @return {Promise.<string>} Returns the url
 */
YoutubePlugin.prototype.openUI = function(parameters) {
  return new Promise(function(resolve, reject) {
    chrome.app.window.create('plugins/youtube/ui.html', { minHeight: 550 },
      function(createdWindow) {
        createdWindow.contentWindow.resolve = resolve;
        createdWindow.contentWindow.url_typed = parameters.url;
    });
  });
};
