// Copyright 2014 Google Inc. All Rights Reserved.

/**
 * @fileoverview Defines the Angular controller for the collections view.
 */


/**
 * Create the Angular controller for the collections screen.
 * @param {Object} $scope The Angular scope for this object
 * @param {Object} $modal Modal popups service
 * @param {Object} $timeout Scoped timeouts service
 * @param {Object} tabloidStore Our store adapter
 * @constructor
 */
function CollectionsController($scope, $modal, $timeout, tabloidStore) {
  this.selectedCollection = undefined;
  this.collections = [];
  this.selectedCollectionIndex = -1;
  this.deleteBoxVisible = [];
  this.itemsSelection = [];
  this.collections_expanded = true;

  this.defaultCollectionName = 'New Collection';
  this.tabloidStore = tabloidStore;
  this.scope = $scope;
  this.modal = $modal;
  this.timeout = $timeout;

  this.initialize();
}

/**
 * Initializes the controller.
 */
CollectionsController.prototype.initialize = function() {
  // Register ourselves to be notified on changes to the store and ask for
  // reloading once in the beginning.
  var self = this;
  this.tabloidStore.setOnChangeCallback(function(collectionsChanged,
        collectionsSettingsChanged, scheduleChanged, scheduleSettingsChanged) {
    self.timeout(function() {
      self.onStorageChanged(collectionsChanged, collectionsSettingsChanged);
    });
  });
  this.tabloidStore.reload();
};

/**
 * Called from tabloidStore whenever a change in the store is registered.
 * @param {boolean} collectionsChanged True if the url collection has changed.
 * @param {boolean} collectionSettingsChanged True if the collection UI
 *     settings has changed.
 * @param {boolean} scheduleChanged True if the schedules have changed.
 * @param {boolean} scheduleSettingsChanged True if the scheduler UI settings
 *     have changed.
 */
CollectionsController.prototype.onStorageChanged = function(
    collectionsChanged, collectionSettingsChanged) {
  var self = this;
  var oldIndex = self.selectedCollectionIndex;

  if (collectionsChanged) {
    self.collections = self.tabloidStore.getCollections() || [];
  }
  if (collectionSettingsChanged) {
    var index =
        self.tabloidStore.getCollectionsSettings().selectedCollectionIndex;
    if (index)
      self.selectedCollectionIndex = index;
  }

  if (self.collections.length <= self.selectedCollectionIndex) {
    self.selectedCollectionIndex = self.collections.length - 1;
  }

  if (oldIndex != self.selectedCollectionIndex) {
    self.collectionSelected(self.selectedCollectionIndex);
  }
};

/**
 * Responds to the add new collection UI element.
 */
CollectionsController.prototype.addCollection = function() {
  var newCollection = {'name': this.defaultCollectionName, items: []};
  this.selectedCollectionIndex = this.collections.length + 1;
  this.tabloidStore.addCollection(newCollection);
  // TODO(pastarmovj): This is a little hacky approach to waiting for the
  // storage to finish and update us about that. The proper solution should be
  // to make this one observe the onStorageChanged callback and react to that.
  this.timeout(this.renameCollection.bind(this), 100);
};

/**
 * Starts the collection rename sequence in the UI.
 */
CollectionsController.prototype.renameCollection = function() {
  this.newCollectionName = this.selectedCollection.name;
  this.renaming = true;
};

/**
 * Finishes a rename operation if the user has confirmed it.
 */
CollectionsController.prototype.doRenameCollection = function() {
  if (!this.renaming) {
    return;
  }
  this.renaming = false;
  this.selectedCollection.name = this.newCollectionName;
  this.tabloidStore.updateCollectionItem(this.selectedCollectionIndex,
                                         this.selectedCollection);
};

/**
 * Handles special key presses on the rename UI.
 * @param {Object} event The raw event data.
 * @return {boolean} True if the event should not be handled further.
 */
CollectionsController.prototype.onRenameKeyPressed = function(event) {
  if (event.keyCode == TabloidUtils.ENTER_KEY) {
    this.doRenameCollection();
  } else if (event.keyCode == TabloidUtils.ESCAPE_KEY) {
    this.renaming = false;
  }
  return false;
};

/**
 * Responds to remove collection UI element.
 * @param {number} id The id of the collection to remove.
 */
CollectionsController.prototype.deleteCollection = function(id) {
  var self = this;
  this.modal.open({
    templateUrl: 'delete-item-popup'
  }).result.then(function() {
    self.tabloidStore.removeCollection(id);
  });
};

/**
 * Updates the UI that depends on whether any items are selected.
 * @return {boolean}
 */
CollectionsController.prototype.hasSelectedItems = function() {
  return this.itemsSelection.some(function(item) {return item;});
};

/**
 * Initiates the adding of items to a collection.
 */
CollectionsController.prototype.addItem = function() {
  var self = this;
  this.addingItem = true;
  this.newItemName = '';
  this.newItemUrl = '';
  // Settings the focus here fails because the element is not yet visible.
  this.timeout(function() { self.focusAddItemName = true; });
};

/**
 * Handles special key presses on the add new item UI.
 * @param {Object} event The raw event data.
 * @return {boolean} True if the event should not be handled further.
 */
CollectionsController.prototype.onItemKeyPressed = function(event) {
  if (event.keyCode == TabloidUtils.ENTER_KEY) {
    // If all is filled in ENTER saves, otherwise it advances to next field.
    if (this.newItemName.trim().length > 0 &&
        this.newItemUrl.trim().length > 0) {
      this.doAddNewItem();
    } else if (this.newItemName.trim().length > 0) {
      this.focusAddItemUrl = true;
    }
  } else if (event.keyCode == TabloidUtils.ESCAPE_KEY) {
    this.addingItem = false;
  }
  return false;
};

/**
 * Completes the adding of a new item.
 */
CollectionsController.prototype.doAddNewItem = function() {
  var self = this;
  if (!this.addingItem) {
    return;
  }
  if (this.selectedCollection.items.some(
          function(item) { return item.title === self.newItemName; })) {
    return;
  }
  this.addingItem = false;
  this.focusAddItemName = false;

  this.newItemUrl = TabloidUtils.fixUpUrl(this.newItemUrl);

  this.selectedCollection.items.push(
      {'title': this.newItemName, 'url': this.newItemUrl});
  this.tabloidStore.updateCollectionItem(this.selectedCollectionIndex,
                                         this.selectedCollection);
};

/**
 * Removes selected items from the collection.
 */
CollectionsController.prototype.deleteItems = function() {
  var self = this;
  this.modal.open({ templateUrl: 'delete-item-popup' }).result
      .then(function() {
    for (var i = self.itemsSelection.length - 1; i >= 0; --i) {
      if (self.itemsSelection[i] === true) {
        self.selectedCollection.items.splice(i, 1);
      }
    }
    self.tabloidStore.updateCollectionItem(self.selectedCollectionIndex,
                                           self.selectedCollection);
    self.itemsSelection = [];
  });
};

/**
 * Responds to the select all checkbox.
 */
CollectionsController.prototype.onSelectAllItems = function() {
  var self = this;
  this.selectedCollection.items.forEach(function(item, index) {
    self.itemsSelection[index] = self.selectAllItems;
  });
};

/**
 * Changes the selected collection, based on user selection in the UI.
 * @param {number} id The id of the newly selected collection.
 */
CollectionsController.prototype.collectionSelected = function(id) {
  // No collections yet.
  if (id < 0) {
    this.selectedCollection = undefined;
    return;
  }

  if (this.selectedCollectionIndex != id) {
    this.tabloidStore.updateCollectionsSettings(
        {'selectedCollectionIndex': id});
  }

  this.selectedCollectionIndex = id;
  this.selectedCollection = this.collections[id];

  this.itemsSelection = [];
};

/**
 * Gives a distinguishable color to sequential collections.
 * @param {number} id The id of the collection to style.
 * @return {string} The class name to be applied to the collection.
 */
CollectionsController.prototype.getCollectionClass = function(id) {
  return id === this.selectedCollectionIndex ?
      'square_col' + (id % 6 + 1) : '';
};



/**
 * Finishes a new schedule edit/delete and updates the store.
 * @param {number} id The id of the schedule that is edited.
 * @param {string} collection_name The updated name of the collection.
 */
CollectionsController.prototype.onCollectionEdited = function(id,
                                                              collection_name) {
  this.collections[id].name = collection_name;
  this.tabloidStore.updateCollectionItem(
      id,
      this.collections[id]);
};

/**
 * Called when the user chooses to edit a schedule from the UI.
 * @param {number} id The schedule id to be edited.
 */
CollectionsController.prototype.editCollection = function(id) {
  var self = this;
  this.modal.open({
    templateUrl: 'edit-collection-properties-popup',
    controller: 'EditCollectionPopupCtrl as editCollectionPopup',
    resolve: {
      config: function() {
        return {
          'id' : id,
          'collection_name': self.collections[id].name
        };
      }
    }
  }).result.then(function(config) {
    self.onCollectionEdited(config.id, config.collection_name);
  });
};


// The controller instance.
Tabloid.controller('CollectionsController', CollectionsController);
