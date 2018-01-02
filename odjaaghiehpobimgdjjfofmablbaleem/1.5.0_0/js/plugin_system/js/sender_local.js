/**
 * An implementation of Sender which can be connected to using a local
 * connection.
 * @param {LocalReceiver} receiver The receiver that connected to this Sender.
 * @param {Hub} hub The Hub this Sender is associated with.
 * @constructor
 * @extends {Sender}
 */
var LocalSender = function(receiver, hub) {
  Sender.call(this, receiver.id_, hub);
  this.receiver_ = receiver;
};

LocalSender.prototype = Object.create(Sender.prototype);

/**
 * The constructor of the current LocalSender.
 * @type {Function}
 * @see http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
 */
LocalSender.prototype.constructor = LocalSender;

/**
 * Sends a Message to the connected Receiver.
 * @param {Request} message The message to send.
 * @param {function(Response)} onResponse A callback that is invoked if the
 *     Receiver replies to the |request|.
 */
LocalSender.prototype.sendMessage = function(message, onResponse) {
  this.receiver_.deliverMessage(message, onResponse);
};

/**
 * Checks whether this is a locally connected Sender.
 * @return {Boolean} Always true.
 */
LocalSender.prototype.isLocal = function() {
  return true;
};

/**
 * Resets the LocalReceiver.
 */
LocalSender.prototype.resetReceiver = function() {
  this.receiver_ = undefined;
};

/**
 * @return {LocalReceiver} Returns the LocalReceiver.
 */
LocalSender.prototype.getReceiver = function() {
  return this.receiver_;
};

/**
 * Drops the connection between sender and receiver.
 */
LocalSender.prototype.disconnect = function() {
  this.hub_.disconnectLocalConnection_(this.getId());
};
