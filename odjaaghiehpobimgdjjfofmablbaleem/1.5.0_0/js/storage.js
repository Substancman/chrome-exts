// Copyright 2014 Google Inc. All Rights Reserved.

/**
 * @fileoverview Defines the low and high-level storage interfaces.
 */


/**
 * Creates a collection entry for storage. Strips storage unrelated fields.
 * @this {StoredCollection}
 * @param {{name: string, items: []}} collection A generic collection type used
 * to store named collections of items used for both url collections and
 * schedule items.
 * Using this constructor also aids stripping unnecessary fields that the
 * front-end might have put in the collection that don't need to end up in
 * storage.
 * @constructor
 */
function StoredCollection(collection) {
  /** @public {string} */
  this.name = collection.name;
  /** @public {Array} contents vary depending on usage. */
  this.items = collection.items;
  /** @public {string} */
  this.defaultUrl = collection.defaultUrl;
  /** @public {integer} */
  this.orientation = collection.orientation;
}

/* TODO: fix casing of variables */


/**
 * Creates a storage backend capable of using Chrome's local_storage for keeping
 * the data. It is an adaptor to the underlying Chrome storage which can be
 * swapped out for testing. It also gives us a way to work against policy or
 * local storage.
 * @this {LocalStateStore}
 * @param {function(Object)} on_change_callback see chrome.storage.onChanged.
 * Called when data has changed externally.
 * @param {Object=} storage used for injecting the dependencies on Chrome. See
 * https://developer.chrome.com/extensions/storage for details.
 * @param {Object=} storage_area used for injecting the dependencies on Chrome.
 * @constructor
 */
function LocalStateStore(on_change_callback, storage, storage_area) {
  /** @private {Object} a reference to the low-level storage. See
   * https://developer.chrome.com/extensions/storage for details about the
   * expected interface.
   */
  this.storage_ = storage || chrome.storage;
  /** @private {Object} a reference to the particular storage source to use.
   * For regular kiosk mode it will be set to chrome.storage.policy and use
   * local storage in app mode for configuration purposes.
   */
  this.storage_area_ = storage_area || chrome.storage.local;
  /** @private {function(Object)} See chrome.storage.onChanged for details. */
  this.callback_ = on_change_callback;

  if (this.callback_)
    this.storage_.onChanged.addListener(this.callback_);
}

/**
 * Retrieves items from the storage.
 * @param {Array.<string>} items An array of object names to retrieve.
 * @param {function(items[])} callback Called when the operation has finished.
 * Returns the set of retrieved items. See chrome.storage.get for more info.
 */
LocalStateStore.prototype.get = function(items, callback) {
  this.storage_area_.get(items, callback);
};

/**
 * Stores items into the storage.
 * @param {Array.<string, Object>} items An array of objects to store.
 * @param {Function} callback Called when the operation has finished.
 * Returns the set of retrieved items. See chrome.storage.get for more info.
 */
LocalStateStore.prototype.set = function(items, callback) {
  this.storage_area_.set(items, callback);
};


/**
 * Factory for creating the right kind of storage based on the configuration.
 * @param {boolean} is_kiosk Whether the app is run in kiosk mode or not.
 * @return {function(Function): LocalStateStore} Creates properly initialized
 * LocalStateStore for the use case. See |LocalStateStore.callback_| for
 * documentation of the callback function.
 */
function CreateChromeStoreFactory(is_kiosk) {
  // Create the factory function.
  return function(on_change_callback) {
    return new LocalStateStore(on_change_callback,
                               chrome.storage,
                               is_kiosk ? chrome.storage.managed :
                                   chrome.storage.local);
  };
}


/**
 * Creates the tabloid store Angular service.
 *
 * This service is aware of all the data that the application uses and can
 * store and retrieve it to a permanent storage like LocalStateStore but it also
 * keeps a local cache of the data for speeding up access during the application
 * lifecycle.
 * @this {TabloidStore}
 * @param {Function=CreateChromeStoreFactory} storage_factory Used to create
 * its low-level storage. Uses CreateChromeStoreFactory when not supplied.
 * @param {boolean} is_kiosk Whether the app is running in kiosk or normal mode.
 * @constructor
 */
function TabloidStore(storage_factory, is_kiosk) {
  /** @private {Array.<name: string, items: Array.<name: string, url: string>>
   */
  this.collections_ = [];
  /** @private {Object} Key-value pairs of settings*/
  this.collections_settings_ = {};
  /** @private {Array.<name: string, items: Array.<StorageSchedule>> */
  this.schedule_ = [];
  /** @private {Object} Key-value pairs of settings*/
  this.schedule_settings_ = {};

  storage_factory =
      storage_factory || CreateChromeStoreFactory(is_kiosk);
  /** @private {LocalStateStore} */
  this.store_ = storage_factory(this.onStoreChanged.bind(this));
  /** @private {function(boolean, boolean, boolean ,boolean)} A callback that
   * will be used to notify clients of changes to the storage. The four
   * parameters reflect which piece of information has changed: the url
   * collection store, the collection ui settings store, the schedule collection
   * or the scheduler ui settings.
   */
  this.callbacks_ = [];
}

/** {String} Storage key used by TabloidStore for url collections. */
TabloidStore.COLLECTIONS_NAME = 'collections';
/** {String} Storage key used by TabloidStore for collections UI settings. */
TabloidStore.COLLECTIONS_SETTINGS_NAME = 'collections_settings';
/** {String} Storage key used by TabloidStore for schedules. */
TabloidStore.SCHEDULE_NAME = 'schedule';
/** {String} Storage key used by TabloidStore for the scheduler UI settings. */
TabloidStore.SCHEDULE_SETTINGS_NAME = 'schedule_settings';

/**
 * Reloads the data from the store and populates the local cache.
 */
TabloidStore.prototype.reload = function() {
  var self = this;
  this.store_.get([TabloidStore.COLLECTIONS_NAME,
                   TabloidStore.COLLECTIONS_SETTINGS_NAME,
                   TabloidStore.SCHEDULE_NAME,
                   TabloidStore.SCHEDULE_SETTINGS_NAME], function(items) {
    self.collections_ = items[TabloidStore.COLLECTIONS_NAME] || [];
    self.collections_settings_ =
        items[TabloidStore.COLLECTIONS_SETTINGS_NAME] || {};
    self.schedule_ = items[TabloidStore.SCHEDULE_NAME] || [];
    self.schedule_settings_ = items[TabloidStore.SCHEDULE_SETTINGS_NAME] || {};
    self.callbacks_.forEach(function(item) {item(true, true, true, true);});
  });
};

/**
 * Callback used with the low-level storage to get notified and update the cache
 * on changes to the storage layer.
 * @param {Object} changes A dictionary with changed values.
 */
TabloidStore.prototype.onStoreChanged = function(changes) {
  var collections_changed = !!changes[TabloidStore.COLLECTIONS_NAME];
  var collections_settings_changed =
      !!changes[TabloidStore.COLLECTIONS_SETTINGS_NAME];
  var schedule_changed = !!changes[TabloidStore.SCHEDULE_NAME];
  var schedule_settings_changed =
      !!changes[TabloidStore.SCHEDULE_SETTINGS_NAME];

  if (collections_changed)
    this.collections_ = changes[TabloidStore.COLLECTIONS_NAME].newValue || [];
  if (collections_settings_changed) {
    this.collections_settings_ =
        changes[TabloidStore.COLLECTIONS_SETTINGS_NAME].newValue || {};
  }
  if (schedule_changed)
    this.schedule_ = changes[TabloidStore.SCHEDULE_NAME].newValue || [];
  if (schedule_settings_changed) {
    this.schedule_settings_ =
        changes[TabloidStore.SCHEDULE_SETTINGS_NAME].newValue || {};
  }

  this.callbacks_.forEach(function(item) {
    item(collections_changed, collections_settings_changed,
         schedule_changed, schedule_settings_changed);
  });
};

/**
 * Retrieves all URL collections.
 * @return {Array} The array of all collections.
 */
TabloidStore.prototype.getCollections = function() {
  return this.collections_;
};

/**
 * Stores the collections to low-level storage.
 * @private
 */
TabloidStore.prototype.storeCollections_ = function() {
  var store_request = {};
  store_request[TabloidStore.COLLECTIONS_NAME] = this.collections_;
  this.store_.set(store_request);
};

/**
 * Adds a new collection to the set of collections.
 * @param {Object} collection The collection to be added.
 */
TabloidStore.prototype.addCollection = function(collection) {
  this.collections_.push(new StoredCollection(collection));
  this.storeCollections_();
};

/**
 * Removes a collection from storage.
 * @param {number} index The index of the collection to be deleted.
 */
TabloidStore.prototype.removeCollection = function(index) {
  this.collections_.splice(index, 1);
  this.storeCollections_();
};

/**
 * Updates a particular collection replacing all its items.
 * @param {number} index The collection's index.
 * @param {Object} item The new set of items.
 */
TabloidStore.prototype.updateCollectionItem = function(index, item) {
  this.collections_[index] = item;
  this.storeCollections_();
};

/**
 * Stores the collections controller's settings to low-level storage.
 * @private
 */
TabloidStore.prototype.storeCollectionsSettings_ = function() {
  var store_request = {};
  store_request[TabloidStore.COLLECTIONS_SETTINGS_NAME] =
      this.collections_settings_;
  this.store_.set(store_request);
};

/**
 * Retrieves the dictionary of settings used to set-up the controller.
 * @return {Object} A dictionary of settings.
 */
TabloidStore.prototype.getCollectionsSettings = function() {
  return this.collections_settings_;
};

/**
 * Stores the collections controller's settings.
 * @param {Object} settings The dictionary of settings.
 */
TabloidStore.prototype.updateCollectionsSettings = function(settings) {
  this.collections_settings_ = settings;
  this.storeCollectionsSettings_();
};

/**
 * Stores the collections controller's settings to low-level storage.
 * @private
 */
TabloidStore.prototype.storeSchedules_ = function() {
  var store_request = {};
  store_request[TabloidStore.SCHEDULE_NAME] = this.schedule_;
  this.store_.set(store_request);
};

/**
 * Retrieves the cached version of all stored schedules.
 * @return {Array} The stored schedules.
 */
TabloidStore.prototype.getSchedules = function() {
  return this.schedule_;
};

/**
 * Adds a new schedule to the collection.
 * @param {Object} schedule The new schedule to be added.
 */
TabloidStore.prototype.addSchedule = function(schedule) {
  this.schedule_.push(new StoredCollection(schedule));
  this.storeSchedules_();
};

/**
 * Removes a schedule.
 * @param {number} index The index to be removed.
 */
TabloidStore.prototype.removeSchedule = function(index) {
  this.schedule_.splice(index, 1);
  this.storeSchedules_();
};

/**
 * Updates a collection by replacing its items.
 * @param {number} index The index of the collection to update.
 * @param {Array} schedule The new set of items to store in it.
 */
TabloidStore.prototype.updateSchedule = function(index, schedule) {
  this.schedule_[index].items = schedule;
  this.storeSchedules_();
};

/**
 * Adds one or more new items to a schedule.
 * @param {number} index The index of the collection to update.
 * @param {Array} items The new set of items to store in it.
 */
TabloidStore.prototype.addScheduleItems = function(index, items) {
  this.schedule_[index].items = this.schedule_[index].items.concat(items);
  this.storeSchedules_();
};

/**
 * Removes one item from a schedule.
 * @param {number} index The index of the collection to update.
 * @param {number} item_index The index of the collection's item to update.
 */
TabloidStore.prototype.removeScheduleItemByIndex = function(index, item_index) {
  this.schedule_[index].items.splice(item_index, 1);
  this.storeSchedules_();
};

/**
 * Updates a collection by replacing its whole object.
 * @param {number} index The index of the collection to update.
 * @param {Object} collection The new item definition to store.
 */
TabloidStore.prototype.updateScheduleItem = function(index, collection) {
  this.schedule_[index] = new StoredCollection(collection);
  this.storeSchedules_();
};

/**
 * Stores the collections controller's settings to low-level storage.
 * @private
 */
TabloidStore.prototype.storeSchedulesSettings_ = function() {
  var store_request = {};
  store_request[TabloidStore.SCHEDULE_SETTINGS_NAME] = this.schedule_settings_;
  this.store_.set(store_request);
};

/**
 * Retrieves the dictionary of settings used to set-up the controller.
 * @return {Object} A dictionary of settings.
 */
TabloidStore.prototype.getSchedulesSettings = function() {
  return this.schedule_settings_;
};

/**
 * Stores the schedule controller's settings.
 * @param {Object} settings The dictionary of settings.
 */
TabloidStore.prototype.updateSchedulesSettings = function(settings) {
  this.schedule_settings_ = settings;
  this.storeSchedulesSettings_();
};

/**
 * Sets a new callback for monitoring changes to the store.
 * @param {Function} callback The new callback to set.
 */
TabloidStore.prototype.setOnChangeCallback = function(callback) {
  this.callbacks_.push(callback);
};

Tabloid.constant('is_kiosk',
                 window !== undefined && window.isKioskMode === true);
Tabloid.constant('storage_factory', undefined);
// Register the service with the Angular app.
Tabloid.service('tabloidStore', TabloidStore);
