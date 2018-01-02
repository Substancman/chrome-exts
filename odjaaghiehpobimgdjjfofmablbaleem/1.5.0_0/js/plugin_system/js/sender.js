/**
 * Senders can be connected to from Receivers and send Messages.
 * @constructor
 * @param {String} id Id of the sender.
 * @param {Hub} hub The Hub the sender is associated with.
 */
var Sender = function(id, hub) {
  this.id_ = id;
  this.hub_ = hub;
};

/**
 * Sends a Message to the connected Receiver.
 * @param {Request} request The message to send.
 * @param {function(Response)} onResponse A callback that is invoked if the
 *     Receiver replies to the |request|.
 */
Sender.prototype.sendMessage = function(request, onResponse) {};

/**
 * Checks whether this is a locally connected Sender.
 */
Sender.prototype.isLocal = function() {
  throw 'Not implemented.';
};

/**
 * @return {String} The sender's id.
 */
Sender.prototype.getId = function() {
  return this.id_;
};

/**
 * Drops the connection between sender and receiver.
 */
Sender.prototype.disconnect = function() {};
