// Copyright 2014 Google Inc. All Rights Reserved.

/**
 * @fileoverview Defines the Angular controller for the edit collection popup.
 */


/**
 * Creates the Angular popup controller for the edit collection modal dialog.
 * @this {EditCollectionPopupCtrl}
 * @param {Object} $modalInstance The modal instance service.
 * @param {Object} config Our configuration data for that dialog instance.
 * @constructor
 */
function EditCollectionPopupCtrl($modalInstance, config) {
  this.id = config.id;
  this.collection_name = config.collection_name;
  this.modalInstance = $modalInstance;
}

/**
 * Event handler for the Save button.
 */
EditCollectionPopupCtrl.prototype.onConfirmed = function() {
  this.modalInstance.close({
    'id': this.id,
    'collection_name': this.collection_name
  });
};

/**
 * Event handler for the Close button.
 */
EditCollectionPopupCtrl.prototype.onCancel = function() {
  this.modalInstance.dismiss();
};
