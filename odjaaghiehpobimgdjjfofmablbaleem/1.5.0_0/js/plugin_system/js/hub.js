/**
 * Hub
 * @param {function(Sender)} onConnect
 * @param {function(Sender)} onDisconnect
 * @constructor
 */
var Hub = function(onConnect, onDisconnect) {
  this.onConnect_ = onConnect;
  this.onDisconnect_ = onDisconnect;

  // All Senders both LocalSenders and MessagingSenders go into this dictionary
  // with their id as the key.
  this.senders_ = {};

  // This dictionary contains all MessagingSenders with the extension id they
  // connect to as the key.
  this.messagingSenders_ = {};
  this.currentId_ = 0;

  // install onConnect handler for chrome messaging.
  if (typeof chrome !== 'undefined' &&
      typeof chrome.runtime !== 'undefined' &&
      typeof chrome.runtime.onConnectExternal !== 'undefined')
    chrome.runtime.onConnectExternal.addListener(
        this.onConnectExternal_.bind(this));
};

/**
 * @param {function(ReceiverState)} onStateChange
 * @param {function(Message, function(Message))} onMessage
 * @return {LocalReceiver}
 */
Hub.prototype.createLocalReceiver = function(onStateChange, onMessage) {
  var id = this.currentId_;
  this.currentId_++;
  return new LocalReceiver(String(id), onStateChange, onMessage, this);
};

/**
 * Establishes a local connection to |localReceiver|.
 * @param {LocalReceiver} localReceiver
 * @private
 */
Hub.prototype.connectLocal_ = function(localReceiver) {
  var localSender = new LocalSender(localReceiver, this);
  this.senders_[localSender.getId()] = localSender;
  if (typeof this.onConnect_ === 'function')
    this.onConnect_.call(null, localSender);
};

/**
 * Callback invoked when an external connection has been established.
 * @param {chrome.runtime.Port} port The connection port.
 * @private
 */
Hub.prototype.onConnectExternal_ = function(port) {
  port.onDisconnect.addListener(this.onDisconnectMessaging_.bind(this));
  var extensionId = port.sender.id;
  var id = this.currentId_;
  this.currentId_++;
  var messagingSender = new MessagingSender(id, port, hub);
  this.messagingSenders_[extensionId] = messagingSender;
  this.senders_[id] = messagingSender;
  if (typeof this.onConnect_ === 'function')
    this.onConnect_.call(null, messagingSender);
};

/**
 * Callback invoked when an external connection is terminated.
 * @param {runtime.Port} port The port that is disconnecting.
 * @private
 */
Hub.prototype.onDisconnectMessaging_ = function(port) {
  var extensionId = port.sender.id;
  var messagingSender = this.messagingSenders_[extensionId];
  var id = messagingSender.getId();
  delete this.senders_[id];
  delete this.messagingSenders_[extensionId];

  // Notify
  if (typeof this.onDisconnect_ === 'function')
    this.onDisconnect_.call(null, messagingSender);
};

/**
 * Disconnects the local connection with id |id|.
 * @param {String} id
 * @private
 */
Hub.prototype.disconnectLocalConnection_ = function(id) {
  var localSender = this.senders_[id];
  var localReceiver = localSender.receiver_;
  delete this.senders_[id];
  localSender.resetReceiver();

  // Notify
  localReceiver.notifyDisconnect_();
  if (typeof this.onDisconnect_ === 'function')
    this.onDisconnect_.call(null, localSender);
};

/**
 * Disconnects the connection to |sender|.
 * @param {Sender} sender
 */
Hub.prototype.disconnect = function(sender) {
  sender.disconnect();
};
