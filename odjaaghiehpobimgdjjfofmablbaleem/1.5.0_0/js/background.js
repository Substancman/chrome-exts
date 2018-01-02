// Copyright 2014 Google Inc. All Rights Reserved.

/**
 * @fileoverview Background script for the app.
 */


/**
 * Creates the application object that is responsible for handling application
 * global events from the browser.
 * @constructor
 */
function TabloidApp() {
  // Wire up the onLaunched listener.
  chrome.app.runtime.onLaunched.addListener(
      this.launch.bind(this));

  this.pluginManager = new PluginManager(undefined, undefined);

  // Instantiate local plugins.

  // Youtube
  var youtubePlugin = this.pluginManager.createLocalPlugin(YoutubePlugin);
  youtubePlugin.register();

  // Drive
  var drivePlugin = this.pluginManager.createLocalPlugin(DrivePlugin);
  drivePlugin.register();
}

/**
 * The initial window size for desktop mode windows.
 * @type {{width: number, height: number}}
 */
TabloidApp.defaultBounds = {width: 1000, height: 700};

/**
 * The name of the display settings policy group.
 * @type {string}
 */
TabloidApp.displaySettingsPolicy = 'display_settings';

/**
 * Opens up the required windows depending on the mode of operation.
 * If in kiosk mode - only the viewer is opened full screen.
 * Otherwise the rest of the UI is shown too and the viewer is a normal window.
 * @param {Object} launchData parameters passed by Chrome upon launch.
 */
TabloidApp.prototype.launch = function(launchData) {
  if (!launchData.isKioskSession)
    this.createConfigScreen();
  this.createViewer(launchData.isKioskSession);
};

/**
 * Creates and shows all the configuration screens available.
 */
TabloidApp.prototype.createConfigScreen = function() {
  var self = this;

  chrome.app.window.create(
      '../editor.html', {id: 'editor', bounds: TabloidApp.defaultBounds},
      function(newWin) {
        newWin.contentWindow.showScreen = self.showScreen;
        newWin.contentWindow.pluginManager = self.pluginManager;
      });
};


/**
 * Changes the screen orientation based on the display settings policy.
 * @param {object} settings The display settings policy to apply.
 */
TabloidApp.prototype.rotateScreen = function(settings) {
  if (settings && settings[TabloidApp.displaySettingsPolicy]) {
    var display_settings = settings[TabloidApp.displaySettingsPolicy];
    chrome.system.display.getInfo(function(info) {
      info.forEach(function(display) {
        if (display.isEnabled) {
          chrome.system.display.setDisplayProperties(
              display.id, {'rotation': display_settings.rotation || 0});
        }
      });
    });
  }
};

/**
 * Callback for changes to the policy concerning the display settings.
 * @param {Object} changes Contains a diff of what changes in the policy store.
 */
TabloidApp.prototype.screenPolicyChanged = function(changes) {
  if (!!changes[TabloidApp.displaySettingsPolicy]) {
    var new_settings = {};
    new_settings[TabloidApp.displaySettingsPolicy] =
        changes[TabloidApp.displaySettingsPolicy].newValue || {'rotation': 0};
    this.rotateScreen(new_settings);
  }
};

/**
 * Creates the viewer window in the right mode.
 * @param {boolean} isKioskSession Whether we are running in kiosk mode or not.
 */
TabloidApp.prototype.createViewer = function(isKioskSession) {
  var self = this;
  if (isKioskSession) {
    chrome.power.requestKeepAwake('display');
    chrome.storage.managed.get(TabloidApp.displaySettingsPolicy,
                               self.rotateScreen);
    chrome.storage.onChanged.addListener(self.screenPolicyChanged.bind(self));
  }

  chrome.app.window.create(
      '../viewer.html',
      {id: 'viewer', state: isKioskSession ? 'fullscreen' : 'minimized'},
      function(newWin) {
        newWin.contentWindow.showScreen = self.showScreen;
        newWin.contentWindow.isKioskMode = isKioskSession;
      });
};

var gTabloidApp = new TabloidApp();
