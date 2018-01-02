// Copyright 2014 Google Inc. All Rights Reserved.

/**
 * @fileoverview Defines the Angular controller for the scheduler view.
 */


/**
 * @param {Object} $scope The Angular scope for this object
 * @param {Object} $modal Modal popups service
 * @param {Object} $timeout Scoped timeouts service
 * @param {Object} tabloidStore Our store adapter
 * @constructor
 */
function ScheduleController($scope, $modal, $timeout, tabloidStore) {
  this.selectedSchedule = [];
  this.schedules = [];
  this.selectedScheduleIndex = -1;
  this.deleteBoxVisible = [];
  this.schedules_expanded = true;
  this.export_expanded = true;
  this.backup_expanded = false;
  this.get_help_expanded = true;

  this.defaultScheduleName = 'New Schedule';

  this.calendarConfig = {
    calendar: {
      defaultView: 'agendaWeek',
      editable: true,
      selectable: true,
      selectHelper: true,
      timezone: 'local',
      header: {
        left: 'today prev,next,title',
        center: '',
        right: 'basicDay,agendaWeek,month'
      },
      select: this.addEvent.bind(this),
      eventClick: this.editEvent.bind(this),
      eventDrop: this.resizeOrMoveEvent.bind(this),
      eventResize: this.resizeOrMoveEvent.bind(this)
    }
  };
  this.eventSources = [this.showEvents.bind(this)];

  this.tabloidStore = tabloidStore;
  this.scope = $scope;
  this.modal = $modal;
  this.timeout = $timeout;
  this.renaming = false;

  this.initialize();
}

/**
 * The list of all zones prepared for passing and use in the UI.
 * @type {SelectOption[]}
 */
ScheduleController.ZONES = [
  new SelectOption('Fullscreen', TabloidUtils.FULLSCREEN),
  new SelectOption('Upper Left', TabloidUtils.UPPER_LEFT),
  new SelectOption('Lower Left', TabloidUtils.LOWER_LEFT),
  new SelectOption('Upper Right', TabloidUtils.UPPER_RIGHT),
  new SelectOption('Lower Right', TabloidUtils.LOWER_RIGHT)
];

/**
 * The list of all repetition types prepared for passing and use in the UI.
 * @type {SelectOption[]}
 */
ScheduleController.PERIODICITIES = [
  new SelectOption('Once', TabloidUtils.REPEAT_ONCE),
  new SelectOption('Hourly', TabloidUtils.REPEAT_HOURLY),
  new SelectOption('Daily', TabloidUtils.REPEAT_DAYLY),
  new SelectOption('Weekly', TabloidUtils.REPEAT_WEEKLY),
  new SelectOption('Monthly', TabloidUtils.REPEAT_MONTHLY)
];

/**
 * The CPanel URL.
 * @type {String}
 */
ScheduleController.prototype.CPANEL_URL = 'https://admin.google.com/AdminHome' +
    '?hf=ChromeAppDetails%3AappId%3Dodjaaghiehpobimgdjjfofmablbaleem%26flyout' +
    '%3Dkiosk';

/**
 * Initializes the controller.
 */
ScheduleController.prototype.initialize = function() {
  // Register ourselves to be notified on changes to the store and ask for
  // reloading once in the beginning.
  var self = this;
  this.tabloidStore.setOnChangeCallback(function(collectionsChanged,
        collectionsSettingsChanged, scheduleChanged, scheduleSettingsChanged) {
    self.timeout(function() {
      self.onStorageChanged(scheduleChanged, scheduleSettingsChanged);
    });
  });
  this.tabloidStore.reload();
};

/**
 * Called from tabloidStore whenever a change in the store is registered.
 * @param {boolean} scheduleChanged True if the schedules have changed.
 * @param {boolean} scheduleSettingsChanged True if the scheduler UI settings
 *     have changed.
 */
ScheduleController.prototype.onStorageChanged = function(
    scheduleChanged, scheduleSettingsChanged) {
  var self = this;
  var oldIndex = self.selectedScheduleIndex;

  if (scheduleChanged) {
    self.schedules = self.tabloidStore.getSchedules() || [];
  }
  if (scheduleSettingsChanged) {
    self.selectedScheduleIndex =
        self.tabloidStore.getSchedulesSettings().selectedScheduleIndex || 0;
  }

  if (self.schedules.length <= self.selectedScheduleIndex) {
    self.selectedScheduleIndex = self.schedules.length - 1;
  }

  if (self.schedules.length === 0) {
    self.timeout(function() {
      self.selectedScheduleIndex = self.schedules.length + 1;
      self.tabloidStore.addSchedule({
          'name': self.defaultScheduleName,
          'items': []
      });
    }, 0);
  }

  if (oldIndex != self.selectedScheduleIndex) {
    self.scheduleSelected(self.selectedScheduleIndex);
  }
};

/**
 * Toggles help flyout.
 */
ScheduleController.prototype.toggleHelpExpanded = function() {
  this.get_help_expanded = !this.get_help_expanded;
};

/**
 * Configures and opens up the event editor popup and handles its result.
 * @param {Object} popupConfig The dictionary with preset popup params.
 * @param {Function} callback Callback called upon closing the dialog.
 */
ScheduleController.prototype.openEventEditPopup = function(
    popupConfig, callback) {
  var self = this;

  // Flatten the collections for the auto-fill service to work with it.
  var collections = [];
  this.tabloidStore.getCollections().forEach(function(item) {
    collections = collections.concat(item.items);
  });

  popupConfig.collections = collections;
  popupConfig.zones = ScheduleController.ZONES;
  popupConfig.periodicities = ScheduleController.PERIODICITIES;

  this.modal.open({
    'templateUrl': 'new-event-popup',
    'controller': 'NewEventPopupController as newEventPopup',
    'resolve': {'config': function() { return popupConfig; } }
  }).result.then(function(config) {
    var event = config.event;

    // Try to transform into properly formatted url.
    event.content = TabloidUtils.fixUpUrl(event.content);

    var storageEvent = TabloidUtils.createStorageRepresentationFromEvent(event);

    callback(event, storageEvent, config.delete);
    self.scope.scheduleCal.fullCalendar('refetchEvents');
  });
};

/**
 * Callback for editing an existing event from the Calendar UI.
 * Triggers the editor popup.
 * @param {Object} calEvent The selected event.
 */
ScheduleController.prototype.editEvent = function(calEvent) {
  var event = this.selectedSchedule[calEvent.id];
  var popupConfig = {
    'begin': event.start,
    'end': event.end,
    'duration': event.duration / TabloidUtils.MINUTE,
    'contentUrl': event.content,
    'autoReload': event.autoReload > 0,
    'autoReloadDelay': event.autoReload / TabloidUtils.SECOND,
    'periodicityId': event.repetition,
    'zoneId': event.zone,
    'zoneWidth': event.zoneWidth,
    'zoneHeight': event.zoneHeight
  };

  if (!event.hasOwnProperty('duration')) {
    var allDayEvent = true;
    var showForever = true;
  } else {
    var allDayEvent = TimeUtils.isAllDay(event);
    var showForever = false;
  }


  popupConfig['allDayEvent'] = allDayEvent;
  popupConfig['showForever'] = showForever;

  this.openEventEditPopup(
      popupConfig, this.onEventEdited.bind(this, calEvent.id));
};

/**
 * Finishes a new event edit/delete and updates the store.
 * @param {number} id The id of the schedule for this event.
 * @param {ScheduleEvent} event The event data.
 * @param {Object} storageEvent The event data in POD-ish representation.
 * @param {boolean} deleted Set to true if the delete button has been clicked.
 */
ScheduleController.prototype.onEventEdited = function(
    id, event, storageEvent, deleted) {
  if (!deleted) {
    this.selectedSchedule[id] = event;
    this.schedules[this.selectedScheduleIndex].items[id] =
        storageEvent;
    this.tabloidStore.updateSchedule(
        this.selectedScheduleIndex,
        this.schedules[this.selectedScheduleIndex].items);
  } else {
    this.tabloidStore.removeScheduleItemByIndex(this.selectedScheduleIndex, id);
    this.selectedSchedule.splice(id, 1);
  }
};

/**
 * Callback for adding new event from the Calendar UI.
 * Triggers the editor popup.
 * @param {moment} begin The start moment selected.
 * @param {moment} end The end moment selected.
 */
ScheduleController.prototype.addEvent = function(begin, end) {
  showAdvancedSettings = false;

  if (begin === undefined) {
    begin = moment();
    showAdvancedSettings = true;
  }

  if (end === undefined) {
    end = moment().add(1, 'hour');
    showAdvancedSettings = true;
  }

  var begin = TimeUtils.fixCalendarMoment(begin);
  var end = TimeUtils.fixCalendarMoment(end);
  var duration = moment.duration(end - begin).asMinutes();
  var allDayEvent = TimeUtils.isAllDay({
    start: begin,
    duration: moment.duration(duration, 'minutes')
  });

  var popupconfig = {
    'begin': begin,
    'end': end,
    'duration': duration,
    'showAdvancedSettings': showAdvancedSettings,
    'allDayEvent': allDayEvent
  };

  this.openEventEditPopup(popupconfig, this.onEventAdded.bind(this));
};

/**
 * Finishes a new event addition and updates the store.
 * @param {ScheduleEvent} event The event data.
 * @param {Object} storageEvent The event data in POD-ish representation.
 */
ScheduleController.prototype.onEventAdded = function(event, storageEvent) {
  this.selectedSchedule.push(event);
  this.tabloidStore.addScheduleItems(this.selectedScheduleIndex,
                                     [storageEvent]);
};

/**
 * Callback for editing an moving/resizing event from the Calendar UI.
 * @param {Object} calEvent The selected event.
 */
ScheduleController.prototype.resizeOrMoveEvent = function(calEvent) {
  var event = this.selectedSchedule[calEvent.id];

  var shift = TimeUtils.fixCalendarMoment(calEvent.start) - event.start;
  console.log('shifting by ' + shift);
  event.start = TimeUtils.fixCalendarMoment(calEvent.start);

  if (event.hasOwnProperty('end'))
    event.end.add(shift, 'milliseconds');

  if (!event.hasOwnProperty('duration')) {
    event.duration = TabloidUtils.DAY;
    event.end = event.start.clone().add(event.duration, 'milliseconds');
  }


  if (calEvent.allDay) {
    event.duration = TabloidUtils.DAY;
  } else if (calEvent.hasOwnProperty('end') && calEvent.end !== null) {
    event.duration = TimeUtils.fixCalendarMoment(calEvent.end) - event.start;
  }

  if (event.hasOwnProperty('end') &&
      moment.duration(event.end - event.start) < event.duration) {
    event.end = event.start.clone().add(event.duration, 'milliseconds');
  }

  var storageEvent = TabloidUtils.createStorageRepresentationFromEvent(event);
  this.onEventEdited(calEvent.id, event, storageEvent, false);
  this.scope.scheduleCal.fullCalendar('refetchEvents');
};

/**
 * Called from the UI when the user selects a different device group.
 * Changes the selected schedule id.
 * @param {number} id The new id selected. If negative it means no schedule has
 *    been selected yet.
 */
ScheduleController.prototype.scheduleSelected = function(id) {
  if (id < 0) {
    this.selectedSchedule = [];
    return;
  }

  if (this.selectedScheduleIndex != id) {
    this.tabloidStore.updateSchedulesSettings(
        {'selectedScheduleIndex': id});

    this.selectedScheduleIndex = id;
  }

  var schedule = this.schedules[id];
  this.selectedSchedule = schedule.items.map(
      TabloidUtils.createEventFromStorageRepresentation);
  this.scope.scheduleCal.fullCalendar('refetchEvents');
};

/**
 * Called from the UI when the user chooses to create a new device group.
 */
ScheduleController.prototype.addSchedule = function() {
  this.tabloidStore.addSchedule({
    name: this.defaultScheduleName,
    items: []
  });
  this.scope.scheduleCal.fullCalendar('refetchEvents');
};

/**
 * Called from the UI when the user chooses to edit the name of a group.
 */
ScheduleController.prototype.renameSchedule = function() {
  this.newScheduleName =
      this.schedules[this.selectedScheduleIndex].name;
  this.renaming = true;
};

/**
 * Completes group rename operation. Triggered when the user leaves the edit
 * field or presses Enter.
 */
ScheduleController.prototype.doRenameSchedule = function() {
  if (!this.renaming) {
    return;
  }
  this.renaming = false;
  this.schedules[this.selectedScheduleIndex].name =
      this.newScheduleName;
  this.tabloidStore.updateScheduleItem(
      this.selectedScheduleIndex,
      this.schedules[this.selectedScheduleIndex]);
};

/**
 * Helper function to detect if editing should be finished or aborted.
 * @param {Object} event The raw event data.
 * @return {boolean} True if the event has been handled.
 */
ScheduleController.prototype.onRenameKeyPressed = function(event) {
  if (event.keyCode == TabloidUtils.ENTER_KEY) {
    this.doRenameSchedule();
  } else if (event.keyCode == TabloidUtils.ESCAPE_KEY) {
    this.renaming = false;
  }
  return false;
};

/**
 * Resets the schedule with id |id|.
 * @param {Number} id The if of the schedule to reset.
 */
ScheduleController.prototype.resetSchedule = function(id) {
  this.schedules[id].items = [];
  this.schedules[id].name = this.defaultScheduleName;
  if (id === this.selectedScheduleIndex)
    this.scheduleSelected(id);
  this.tabloidStore.updateScheduleItem(
      id,
      this.schedules[id]);
};

/**
 * Called when the user chooses to delete a group from the UI.
 * @param {number} id The group id to be deleted.
 */
ScheduleController.prototype.deleteSchedule = function(id) {
  var self = this;
  if (self.tabloidStore.getSchedules().length > 1) {
    this.modal.open({
      templateUrl: 'delete-item-popup'
    }).result.then(function() {
      self.tabloidStore.removeSchedule(id);
      self.scope.scheduleCal.fullCalendar('refetchEvents');
    });
  } else {
    this.modal.open({
      templateUrl: 'delete-not-possible-schedule-popup'
    }).result.then(function() {
      self.resetSchedule(id);
      self.scope.scheduleCal.fullCalendar('refetchEvents');
    });

  }
};

/**
 * Finishes a new schedule edit/delete and updates the store.
 * @param {number} id The id of the schedule that is edited.
 * @param {string} scheduleName The updated name of the schedule.
 * @param {string} defaultUrl The update default url of the schedule.
 * @param {string} orientation The updated orientation of the schedule.
 */
ScheduleController.prototype.onScheduleEdited = function(
    id, scheduleName, defaultUrl, orientation) {
  this.schedules[id].name = scheduleName;
  this.schedules[id].defaultUrl = defaultUrl;
  this.schedules[id].orientation = orientation;
  this.tabloidStore.updateScheduleItem(
      id,
      this.schedules[id]);
};

/**
 * Called when the user chooses to edit a schedule from the UI.
 * @param {number} id The schedule id to be edited.
 */
ScheduleController.prototype.editSchedule = function(id) {
  var self = this;
  this.modal.open({
    templateUrl: 'edit-schedule-properties-popup',
    controller: 'EditSchedulePopupCtrl as editSchedulePopup',
    resolve: {
      config: function() {
        return {
          'id' : id,
          'scheduleName': self.schedules[id].name,
          'defaultUrl': self.schedules[id].defaultUrl,
          'orientation': self.schedules[id].orientation
        };
      }
    }
  }).result.then(function(config) {
    self.onScheduleEdited(config.id,
        config.scheduleName, config.defaultUrl, config.orientation);
  });
};

/**
 * Returns an alternating name for the group class to provide distinguishable
 * coloring.
 * @param {number} id The group id to be styled.
 * @return {string} The name of the class to be applied.
 */
ScheduleController.prototype.getScheduleClass = function(id) {
  return id === this.selectedScheduleIndex ?
          'square_col' + (id % 6 + 1) : '';
};

/**
 * Generates the JSON representation of the policy.
 * @return {string} The JSON representation of the policy.
 */
ScheduleController.prototype.generatePolicy = function() {
  policy = {};
  var selectedSchedule = this.schedules[this.selectedScheduleIndex];
  if (selectedSchedule.orientation !== undefined) {
    policy['display_settings'] = {
      'Value': { 'rotation': selectedSchedule.orientation }
    };
  }
  if (selectedSchedule.items !== undefined &&
      selectedSchedule.name !== undefined) {
    policy['schedule'] = {
      'Value': [{
        'items': selectedSchedule.items,
        'name': selectedSchedule.name,
        'defaultUrl': selectedSchedule.defaultUrl
      }]
    };
  }
  return JSON.stringify(policy, undefined, 2);
};

/**
 * Called when the user chooses to export the current Schedule in a file for
 * uploading to the CPanel UI.
 */
ScheduleController.prototype.exportPolicy = function() {
  var policy = this.generatePolicy();

  var self = this;
  chrome.fileSystem.chooseEntry({
    'type': 'saveFile',
    'accepts': [{
      'description': 'CPanel Policy File',
      'extensions': ['txt', 'text']
    }],
    'acceptsAllTypes': false },
    function(entry) {
      if (entry) {
        entry.createWriter(function(writer) {
          writer.onwriteend = function(e) {
            writer.onwriteend = null;
            this.truncate(this.position);
            return;
          };
          writer.write(
              new Blob([policy], {type: 'text/plain'}));
          window.open(self.CPANEL_URL, 'CPanel');
        });
      }
  });
};

/**
 * Called when the user chooses to backup all data of the application.
 */
ScheduleController.prototype.exportData = function() {
  var self = this;
  chrome.fileSystem.chooseEntry({
    'type': 'saveFile',
    'accepts': [{
      'description': 'Chrome Sign Builder File',
      'extensions': ['txt', 'text']
    }],
    'acceptsAllTypes': false },
    function(entry) {
      if (entry) {
        entry.createWriter(function(writer) {
          writer.onwriteend = function(e) {
            writer.onwriteend = null;
            this.truncate(this.position);
            return;
          };
          var data = {
              'collections': self.tabloidStore.getCollections(),
              'collections_settings':
                  self.tabloidStore.getCollectionsSettings(),
              'schedules': self.tabloidStore.getSchedules(),
              'schedules_settings': self.tabloidStore.getSchedulesSettings()};
          writer.write(
              new Blob([JSON.stringify(data,undefined, 2)],
                       {type: 'text/plain'}));
        });
      }
  });
};

/**
 * Called when the user chooses to restore a backup created with the exportData
 * function above.
 */
ScheduleController.prototype.importData = function() {
  var self = this;
  chrome.fileSystem.chooseEntry({
    'type': 'openFile',
    'accepts': [{
      'description': 'Chrome Sign Builder File',
      'extensions': ['txt', 'text']
    }],
    'acceptsAllTypes': false },
    function(entry) {
      if (entry) {
        entry.file(function(file) {
          var reader = new FileReader();
          reader.onload = function() {
            var data = JSON.parse(reader.result);
            // All coalesced types of false here are equally bad.
            if (data && data.collections) {
              data.collections.forEach(function(item) {
                  self.tabloidStore.addCollection(item);
              });
            }
            if (data.collections_settings !== undefined) {
              self.tabloidStore.updateCollectionsSettings(
                  data.collections_settings);
            }
            if (data.schedules !== undefined) {
              data.schedules.forEach(function(item) {
                  self.tabloidStore.addSchedule(item);
              });
            }
            if (data.schedules_settings !== undefined) {
              self.tabloidStore.updateSchedulesSettings(
                  data.collections_settings);
            }
          };
          reader.onerror = function() {
            console.error('Could not load file. ' + reader.error);
          };
          reader.readAsText(file);
        }, function(e) { console.error('Could not load file. ' + e.code); });
      }
  });
};

/**
 * Creates an event renderer function for event occurences that end after
 * |start| and begin before |end|.
 * @param {moment} start Start moment for renderer.
 * @param {moment} end End moment for renderer.
 * @param {string} className The css class name that will be applied to the
 *                           rendered events.
 * @param {pusher} pusher A function used to push the events into the calendar.
 * @return {Function} Returns the renderer functions.
 * @private
 */
ScheduleController.prototype.createEventRenderer_ = function(start,
    end, className, pusher) {
  start = TimeUtils.fixCalendarMoment(start);
  end = TimeUtils.fixCalendarMoment(end);
  var self = this;
  return function(item, index, schedule) {
    // Show forever event?
    if (!item.hasOwnProperty('duration')) {
      pusher({'id': index, 'title': item.content,
              'start': start, 'end': end,
              'allDay': true, 'className': className});
      return;
    }

    var interval_start = Utils.default(
      TimeUtils.findMostRecentOccurrence(item, start), item.start);

    var interval_end = end;
    if (item.hasOwnProperty('end') && item.end < end)
      interval_end = item.end;

    var currentStart = interval_start.clone();
    while (currentStart <= interval_end) {
      var event = {'id': index, 'title': item.content,
             'start': currentStart.clone(),
             'end': currentStart.clone().add(item.duration, 'milliseconds'),
             'allDay': TimeUtils.isAllDay(item), 'className': className};
      pusher(event);
      currentStart.add(1, TabloidUtils.MOMENT_INTERVAL[item.repetition]);
    }
    return;
  };
};

/**
 * Callback called each time the calendar needs to render its UI.
 * @param {Date} start The start moment of the current time scope shown.
 * @param {Date} end The end moment of the current time scope shown.
 * @param {Object} timezone Information of the currently selected timezone
 * @param {Function} callback A callback provided by the calendar to be called
 * when the event data has been compiled.
 */
ScheduleController.prototype.showEvents = function(
    start, end, timezone, callback) {
  var className = 'square_col' + (this.selectedScheduleIndex % 3 + 1);
  var events = [];
  var renderer = this.createEventRenderer_(start,
                                           end,
                                           className,
                                           events.push.bind(events));
  this.selectedSchedule.forEach(renderer);
  callback(events);
};

// Register the controller with Angular.
Tabloid.controller('ScheduleController', ScheduleController);

