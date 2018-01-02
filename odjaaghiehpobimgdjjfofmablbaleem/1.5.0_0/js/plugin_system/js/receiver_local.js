/**
 * An implementation of Receiver which connects using a local connection.
 * @param {String} id The id of the receiver.
 * @param {function(ReceiverState)} onStateChange Callback invoked when the
 *     connection state changes.
 * @param {function(Message, function(Message))} onMessage Callback invoked
 *     when a new message arrives.
 * @param {Hub} hub The connection hub to connect to.
 * @constructor
 * @extends {Receiver}
 */
var LocalReceiver = function(id, onStateChange, onMessage, hub) {
  Receiver.call(this, onStateChange, onMessage);

  // stuff specific to LocalReceiver
  this.id_ = id;
  this.hub_ = hub;

  // Ensure a valid Hub was passed in.
  if (typeof this.hub_ === 'undefined' || this.hub_.constructor !== Hub)
    throw 'No reference to Hub';
};

LocalReceiver.prototype = Object.create(Receiver.prototype);

/**
 * The constructor of the current LocalReceiver.
 * @type {Function}
 * @see http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
 */
LocalReceiver.prototype.constructor = LocalReceiver;


/**
 * Returns the id of this LocalReceiver.
 * @return {String} The id of the LocalReceiver.
 */
LocalReceiver.prototype.getId = function() {
  return this.id_;
};

/**
 * This method is invoked by the LocalSender when it wants to deliver a Message.
 * @param {Message} message The Message to be delivered.
 * @param {function(Message)} sendResponse A callback function that can be
 *     invoked by the message handler to reply to the LocalSender.
 * @throws {String}
 */
LocalReceiver.prototype.deliverMessage = function(message, sendResponse) {
  if (typeof this.onMessageHandler_ !== 'function')
      throw 'No valid message handler set.';
  this.onMessageHandler_(message, sendResponse);
};

/**
 * Establishes a connection to the Hub.
 */
LocalReceiver.prototype.connect = function() {
  if (this.state_.connected)
    throw 'Already connected';
  this.hub_.connectLocal_(this);
  this.state_.connected = true;
  if (typeof this.onStateChangeHandler_ === 'function')
    this.onStateChangeHandler_(this.state_);
};

/**
 * Invokes the onStateChanged() callback of this LocalReceiver.
 * @private
 */
LocalReceiver.prototype.notifyDisconnect_ = function() {
  if (typeof this.onStateChangeHandler_ === 'function' &&
      (this.state_.connected !== false || this.state_.error !== undefined)) {
    this.state_.connected = false;
    this.state_.error = undefined;
    this.onStateChangeHandler_(this.state_);
  }
};

/**
 * Disconnects from the LocalSender.
 */
LocalReceiver.prototype.disconnect = function() {
  this.hub_.disconnectLocalConnection_(this.id_);
};
