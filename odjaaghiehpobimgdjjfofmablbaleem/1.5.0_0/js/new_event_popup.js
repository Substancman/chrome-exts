// Copyright 2014 Google Inc. All Rights Reserved.

/**
 * @fileoverview Defines the Angular controller for the new event popup.
 */


/**
 * Creates the Angular popup controller for the new event modal dialog.
 * @this {NewEventPopupController}
 * @param {Object} $modalInstance The modal instance service.
 * @param {Object} $timeout Angular's wrapper for window.setTimeout.
 * @param {Object} config Our configuration data for that dialog instance.
 * @constructor
 */
function NewEventPopupController($modalInstance, $timeout, config) {
  // Configure the UI and populate data.
  this.allDayEvent = Utils.default(config.allDayEvent, false);
  this.zone = Utils.default(Utils.findById(config.zoneId, config.zones),
                            config.zones[0]);
  this.zones = config.zones;
  this.zoneWidth = Utils.default(config.zoneWidth, '30%');
  this.zoneHeight = Utils.default(config.zoneHeight, '30%');
  this.contentUrl = Utils.default(config.contentUrl, '');
  this.periodicity = Utils.default(Utils.findById(config.periodicityId,
                                                  config.periodicities),
                                   config.periodicities[0]);
  this.periodicities = config.periodicities;

  // autoReloadDelay is always measured in seconds.
  this.autoReload = Utils.default(config.autoReload, false);
  if (this.autoReload)
    this.autoReloadDelay = Utils.default(config.autoReloadDelay, 0);

  this.collections = config.collections;
  this.begin = config.begin;
  this.end = config.end;

  // duration is always measured in minutes.
  this.duration = Utils.default(config.duration, 60);

  this.showAdvancedSettings = Utils.default(config.showAdvancedSettings, true);
  this.showDeleteButton = Utils.default(config.showDeleteButton, true);
  this.showEndTimeControls = Utils.default(config.showEndTime, true);
  this.showRepeatIndefinitely = Utils.default(config.showRepeatIndefinitely,
                                              true);
  this.repeatIndefinitely = Utils.default(config.repeatIndefinitely, true);
  this.showForever = Utils.default(config.showForever, false);

  this.timeout = $timeout;
  this.modalInstance = $modalInstance;

  this.initialize(config);
}

/**
 * Initializes the controller.
 * @param {Object} config Our configuration data for that dialog instance.
 */
NewEventPopupController.prototype.initialize = function(config) {
  // Initialize with default beginning and end for non-all-day events.
  if (!this.allDayEvent && !Utils.isSet(this.begin) && !Utils.isSet(this.end)) {
    this.begin = moment();
    this.end = moment().add(1, 'hour');
    this.duration = 60;
  }

  if (!Utils.isSet(this.begin) && !Utils.isSet(this.end)) {
    // If neither |begin| nor |end| is defined, the event lasts forever. Since
    // the |duration| for such an event is infinite, it is undefined.
    this.duration = undefined;
    this.repeatIndefinitely = false;
    this.showForever = true;
    this.showEndTimeControls = false;
    this.showRepeatIndefinitely = false;
  } else if (!Utils.isSet(this.end)) {
    // If only |end| is not defined, reoccuring events, repeat indefinitely.
    this.repeatIndefinitely = true;
    this.showRepeatIndefinitely = true;
    this.showEndTimeControls = false;
    this.showForever = false;
  }

  this.updateTimeAndDateWidgets();

  this.showRepeatIndefinitely = (this.periodicity.id !==
                                 TabloidUtils.REPEAT_ONCE);
  this.showEndTimeControls = (this.periodicity.id !== '-' &&
                              !this.repeatIndefinitely);

  // Configure the initial state.
  this.onZoneChanged();
};

/**
 * Checks whether the supplied input in the dialog is valid.
 * @return {Boolean} Returns true if the supplied inputs are valid. Otherwise
 *                   returns false.
 */
NewEventPopupController.prototype.isInputValid = function() {
  /* URL field not populated, e.g. typeahead failed. */
  if (typeof this.contentUrl === 'undefined')
    return false;
  /* URL field contains the empty string. */
  if (this.contentUrl === '')
    return false;
  /* Autoreload checkbox checked, but no autoreload delay specified. */
  if (this.autoReload && isNaN(parseInt(this.autoReloadDelay)))
    return false;
  /*
   * If a periodicity is specified which is not infintely repeating, begin and
   * end date must be set.
   */
  if (this.periodicity.id !== TabloidUtils.REPEAT_ONCE &&
      !this.repeatIndefinitely &&
      (this.endAsDate === null || this.endTimeAsDate === null)) {
    return false;
  }
  /* Begin date must always be set. */
  if (this.beginAsDate === null || this.beginTimeAsDate === null)
    return false;
  return true;
};

/**
 * Updates the time and date widgets in the dialog.
 */
NewEventPopupController.prototype.updateTimeAndDateWidgets = function() {
  if (Utils.isSet(this.begin)) {
    this.beginAsDate = this.begin.toDate();
    this.beginTimeAsDate = this.begin.toDate();
  }
  if (Utils.isSet(this.end)) {
    this.endAsDate = this.end.toDate();
    this.endTimeAsDate = this.end.toDate();
  }
};

/**
 * Monitor the repetition drop-down and show/hide the end respectively.
 */
NewEventPopupController.prototype.onPeriodicityChanged = function() {
  this.showRepeatIndefinitely = (this.periodicity.id !==
                                 TabloidUtils.REPEAT_ONCE);
  this.showEndTimeControls =
      (this.periodicity.id !== TabloidUtils.REPEAT_ONCE &&
      !this.repeatIndefinitely);
};

/**
 * Handles clicks on the showForever checkbox.
 */
NewEventPopupController.prototype.onShowForeverChanged = function() {
  // When removing the show-forever property from an event, the event defaults
  // to a start time at the beginning of the current day and a default duration
  // of one day.
  if (!this.showForever && (!this.hasOwnProperty('begin') ||
      this.begin === undefined)) {
    this.begin = moment().startOf('day');
    this.duration = 1440;
    this.repeatIndefinitely = true;
    this.updateTimeAndDateWidgets();
  }
};

/**
 * Opens up the advanced section of the dialog.
 */
NewEventPopupController.prototype.onShowAdvancedSettings = function() {
  this.showAdvancedSettings = true;
};

/**
 * Shows the zone size editing boxes.
 */
NewEventPopupController.prototype.onShowSizes = function() {
  this.showSizeLink = false;
  this.showSizeEditor = true;
};

/**
 * Delets the event's end date if the |repeatIndefinitely| flag has been set.
 */
NewEventPopupController.prototype.onRepeatIndefinitely = function() {
  if (this.repeatIndefinitely) {
    this.end = undefined;
  }
};

/**
 * Handles a change to the selected zone and updates the rest of the UI because
 * zone sizes only make sense for non-fullscreen zones.
 */
NewEventPopupController.prototype.onZoneChanged = function() {
  if (this.zone.id !== TabloidUtils.FULLSCREEN) {
    this.showSizeLink = true;
    this.showSizeEditor = false;
  } else {
    this.showSizeLink = false;
    this.showSizeEditor = false;
  }
};

/**
 * Determines the type ahead items that shown in the suggestion box. These items
 * come from two sources: (a) plugins and (b) collection items. For the plugins
 * the PluginManager is invoked and returns a promise for the items. When the
 * promise has been fulfilled, the matching collection items are added
 * synchonously.
 * @param {string} url_typed The text that has been typed into the URL field.
 * @return {Object[]} Returns an array of collection and plugin items, matching
 *                    matching the text entered in the URL field.
 */
NewEventPopupController.prototype.getTypeAheadItems = function(url_typed) {
  var self = this;
  return new Promise(function(resolve, reject) {
    var items = [];

    var plugin_promise = pluginManager.getResponsiblePlugins(url_typed);

    plugin_promise.then(function(ids) {
      pluginManager.getPluginNames(ids).then(function(pluginNames) {
        /* insert plugin recommendations */
        for (var id in pluginNames) {
          items.push({
            title: '<i class="fa fa-cube"></i> Open ' + pluginNames[id],
            type: 'PluginItem',
            pluginId: id,
            url: url_typed
          });
        }

        /* do searches in collections synchronously here! */
        self.collections.forEach(function(item) {
          if (item.title.indexOf(url_typed) !== -1) {
            items.push({ title: item.title, url: item.url, type: 'UrlItem' });
          }
        });

        /* all done. resolve promise. */
        resolve(items);
      });
    });
  });
};

/**
 * Updates the dialog after the user selected one of the typeahead suggestions.
 * @param {Object} item The collection or plugin item, the user selected.
 */
NewEventPopupController.prototype.typeAheadItemSelected = function(item) {
  var self = this;
  if (!item.type)
    return;
  if (item.type === 'UrlItem') {
    self.contentUrl = item.url;
  } else if (item.type === 'PluginItem') {
    self.contentUrl = item.url;
    var pluginPromise = pluginManager.openUI(item.pluginId, item.url);
    pluginPromise.then(function(url) {
      self.timeout(function() {
        self.contentUrl = url;
      });
    });
  } else {
    console.log('Unknown item type.');
  }
};

/**
 * Re-consolidates time and date and constructs the new event, when the user
 * chooses to exit the popup dialog by clicking the non-cancel button.
 * @param {string} url Contents of the URL field.
 * @param {Boolean} deleteClicked If set to true, the user clicked the delete
 *                                delete button, otherwise the save button.
 */
NewEventPopupController.prototype.exitPopup = function(url, deleteClicked) {
  // Re-consolidate time and date.
  if (this.showForever) {
    this.begin = undefined;
    this.end = undefined;
    this.duration = undefined;
  } else if (this.periodicity.id === TabloidUtils.REPEAT_ONCE) {
    this.begin = TimeUtils.momentFromDateAndTime(this.beginAsDate,
                                             this.beginTimeAsDate);
    this.end = this.begin.clone().add(this.duration, 'minutes');
  } else if (this.repeatIndefinitely) {
    this.begin = TimeUtils.momentFromDateAndTime(this.beginAsDate,
                                                 this.beginTimeAsDate);
    this.end = undefined;
  } else {
    this.begin = TimeUtils.momentFromDateAndTime(this.beginAsDate,
                                                 this.beginTimeAsDate);
    this.end = TimeUtils.momentFromDateAndTime(this.endAsDate,
                                               this.endTimeAsDate);
  }
  var event = {
    'content': url,
    'zone': this.zone.id,
    'zoneWidth': this.zoneWidth,
    'zoneHeight': this.zoneHeight,
    'zoneXOffset': '0',
    'zoneYOffset': '0',
    'repetition': this.periodicity.id,
    'autoReload':
        (this.autoReload ? this.autoReloadDelay : 0) * TabloidUtils.SECOND,
    'cachePolicy': 'forever'
  };

  if (this.begin)
    event['start'] = this.begin;

  if (this.end)
    event['end'] = this.end;

  if (this.duration)
    event['duration'] = this.duration * TabloidUtils.MINUTE;

  var config = {
    'delete': deleteClicked,
    'event': event
  };

  this.modalInstance.close(config);
};

/**
 * Handles the non-cancel buttons.
 * @param {boolean} deleteClicked Whether the delete button has been clicked.
 */
NewEventPopupController.prototype.onConfirmed = function(deleteClicked) {
  this.exitPopup(this.contentUrl, deleteClicked);
};

/**
 * Closes the window on clicking the close button.
 */
NewEventPopupController.prototype.onClose = function() {
  this.modalInstance.dismiss();
};
