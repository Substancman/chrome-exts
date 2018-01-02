/**
 * MessagingSenders use the chrome.runtime messaging system to communicate.
 * @param {String} id Id of this MessagingSender.
 * @param {chrome.runtime.port} port The chrome.runtime port used for
 *     communication.
 * @param {Hub} hub The Hub this MessagingSender is associated with.
 * @constructor
 * @extends {Sender}
 */
var MessagingSender = function(id, port, hub) {
  Sender.call(this, id, hub);
  this.port_ = port;
};

MessagingSender.prototype = Object.create(Sender.prototype);

/**
 * The constructor of the current MessagingSender.
 * @type {Function}
 * @see http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
 */
MessagingSender.prototype.constructor = MessagingSender;

/**
 * Sends a Message to the connected Receiver.
 * @param {Request} request The message to send.
 * @param {function(Response)} onResponse A callback that is invoked if the
 *     Receiver replies to the |request|.
 */
MessagingSender.prototype.sendMessage = function(request, onResponse) {
  chrome.runtime.sendMessage(this.port_.sender.id, request, onResponse);
};

/**
 * @return {Boolean} True if the sender is local, false otherwise.
 */
MessagingSender.prototype.isLocal = function() {
  return false;
};

/**
 * Drops the connection between sender and receiver.
 */
MessagingSender.prototype.disconnect = function() {
  if (typeof this.port_ !== 'undefined')
    this.port_.disconnect();
};
