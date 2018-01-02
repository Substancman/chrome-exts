// Copyright 2014 Google Inc. All Rights Reserved.

/**
 * @fileoverview Defines the Angular controller for the edit schedule popup.
 */


/**
 * Creates the Angular popup controller for the edit schedule modal dialog.
 * @this {EditSchedulePopupCtrl}
 * @param {Object} $modalInstance The modal instance service.
 * @param {Object} config Our configuration data for that dialog instance.
 * @constructor
 */
function EditSchedulePopupCtrl($modalInstance, config) {
  // Configure the UI and populate data.
  this.orientations = [
    new SelectOption('No rotation', 0),
    new SelectOption('90\xb0 rotation', 90),
    new SelectOption('180\xb0 rotation', 180),
    new SelectOption('270\xb0 rotation', 270),
    new SelectOption('System default', undefined)];

  this.id = config.id;
  var index = [0, 90, 180, 270, undefined].indexOf(config.orientation);
  if (index === -1)
    index = 4;
  this.orientation = this.orientations[index];
  this.scheduleName = config.scheduleName;
  this.defaultUrl = config.defaultUrl;
  this.modalInstance = $modalInstance;
}

/**
 * Event handler for the Save button.
 */
EditSchedulePopupCtrl.prototype.onConfirmed = function() {
  if (typeof this.defaultUrl === 'string' &&
      this.defaultUrl.length === 0)
    delete this.defaultUrl;
  this.modalInstance.close({
    'id': this.id,
    'scheduleName': this.scheduleName,
    'defaultUrl': this.defaultUrl,
    'orientation': this.orientation.id
  });
};

/**
 * Event handler for the Close button.
 */
EditSchedulePopupCtrl.prototype.onCancel = function() {
  this.modalInstance.dismiss();
};
