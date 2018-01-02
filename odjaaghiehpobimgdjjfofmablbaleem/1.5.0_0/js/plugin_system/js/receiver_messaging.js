/**
 * MessagingReceivers use the chrome.runtime messaging system to communicate.
 * @param {String} extensionId The extension id of the Hub to connect to.
 * @param {function(ReceiverState)} onStateChange Callback invoked when the
 *     ReceiverState changes.
 * @param {function(Message, function(Message))} onMessage Callback invoked when
 *     a new Message arrives.
 * @constructor
 * @extends {Receiver}
 */
var MessagingReceiver = function(extensionId, onStateChange, onMessage) {
  Receiver.call(this, onStateChange, onMessage);

  this.extensionId_ = extensionId;
};

MessagingReceiver.prototype = Object.create(Receiver.prototype);

/**
 * The constructor of the current MessagingReceiver.
 * @type {Function}
 * @see http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
 */
MessagingReceiver.prototype.constructor = MessagingReceiver;

/**
 * Establishes a connection to the Hub.
 */
MessagingReceiver.prototype.connect = function() {
  if (this.state_.connected)
    throw 'Already connected';
  this.port_ = chrome.runtime.connect(this.extensionId_);
  this.state_.connected = true;
  if (typeof this.onStateChangeHandler_ === 'function')
    this.onStateChangeHandler_(this.state_);
  this.port_.onDisconnect.addListener(this.onDisconnect_.bind(this));
  chrome.runtime.onMessageExternal.addListener(this.onMessage_.bind(this));
};

/**
 * Callback invoked when the connection is terminated.
 * @private
 */
MessagingReceiver.prototype.onDisconnect_ = function() {
  if (typeof this.onStateChangeHandler_ === 'function' &&
      (this.state_.connected !== false || this.state_.error !== undefined)) {
    this.state_.connected = false;
    this.state_.error = undefined;
    this.onStateChangeHandler_(this.state_);
  }
};

/**
 *  Callback to handle incoming messages.
 * @param {Message} request The incoming message.
 * @param {chrome.runtime.MessageSender} sender The sender of the Message.
 * @param {function(Message)} sendResponse Callback that can be invoked to reply
 *     to the Sender.
 * @private
 */
MessagingReceiver.prototype.onMessage_ =
    function(request, sender, sendResponse) {
  if (typeof this.onMessageHandler_ === 'function')
    this.onMessageHandler_(request, sendResponse);
};

/**
 * Disconnects from the LocalSender.
 */
MessagingReceiver.prototype.disconnect = function() {
  if (typeof this.port_ !== 'undefined')
    this.port_.disconnect();
};
