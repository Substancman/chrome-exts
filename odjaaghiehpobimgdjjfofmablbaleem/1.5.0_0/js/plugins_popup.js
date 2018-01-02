// Copyright 2015 Google Inc. All Rights Reserved.

/**
 * @fileoverview Defines the Angular controller for the plugins popup.
 */

/**
 * Creates the Angular popup controller for the plugins modal dialog.
 * @this {PluginsPopupController}
 * @param {Object} $modalInstance The modal instance service.
 * @param {Object} config Our configuration data for that dialog instance.
 * @constructor
 */
function PluginsPopupController($modalInstance, config) {
  this.pluginInfos = [];
  var total = 0;
  for (var id in config.plugins) {
    var plugin = config.plugins[id];
    this.pluginInfos.push({
      name: plugin.name,
      connectionType: plugin.getConnection().connectionType
    });
    total = total + 1;
  }
  this.modalInstance = $modalInstance;
}

/**
 * Event handler for the OK button.
 */
PluginsPopupController.prototype.onConfirmed = function() {
  this.modalInstance.close();
};
