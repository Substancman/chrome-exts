// Copyright 2014 Google Inc. All Rights Reserved.

/**
 * @fileoverview Defines the application module shared by all controllers and
 * services.
 */


// The Tabloid module definition shared throughout the whole app.
var Tabloid = angular.module('Tabloid', ['ui.calendar', 'ui.bootstrap']);

// Not needed since we have CSP for this anyway.
Tabloid.config(function($sceProvider) {
  $sceProvider.enabled(false);
});
