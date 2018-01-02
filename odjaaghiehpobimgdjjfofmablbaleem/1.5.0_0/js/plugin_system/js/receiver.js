
/**
 * The connection state of the Receiver.
 * @param {boolean} connected Indicates connection state.
 * @param {string} error Error message if connection failed.
 * @constructor
 */
var ReceiverState = function(connected, error) {
  this.connected = connected;
  this.error = error;
};

/**
 * Receivers can connect to Senders and receive Messages.
 * @param {function(ReceiverState)} onStateChange Callback that is invoked when
 *     the connection state of the Receiver changes.
 * @param {function(Message, function(Message))} onMessage Callback that is
 *     invoked, when a Message arrives.
 * @constructor
 */
var Receiver = function(onStateChange, onMessage) {
  this.onStateChangeHandler_ = onStateChange;
  this.onMessageHandler_ = onMessage;
  this.state_ = new ReceiverState(false, undefined);
};

/**
 * Returns the ReceiverState of this Receiver.
 * @return {ReceiverState} The ReceiverState.
 */
Receiver.prototype.getState = function() {
  return this.state_;
};

/**
 * Initiates a connection to a Hub.
 */
Receiver.prototype.connect = function() {};

/**
 * Disconnects from the currently connected sender.
 */
Receiver.prototype.disconnect = function() {};
