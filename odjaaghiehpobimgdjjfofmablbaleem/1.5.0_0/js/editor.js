// Copyright 2014 Google Inc. All Rights Reserved.

/**
 * @fileoverview Defines the Angular controller for the editor window.
 */


/**
 * @this {EditorController}
 * @constructor
 */
function EditorController() {
  // The current active view.
  this.currentView = 'schedule';
}
  /**
   * Switches between the configuration screens.
   * @param {string} screen
   */
EditorController.prototype.switchTo = function(screen) {
  this.currentView = screen;
};


// Register the controller with Angular.
Tabloid.controller('EditorController', EditorController);
