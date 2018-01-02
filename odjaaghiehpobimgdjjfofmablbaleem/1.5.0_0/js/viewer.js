// Copyright 2014 Google Inc. All Rights Reserved.

/**
 * @fileoverview Defines the Angular controller for the viewer window.
 */


/**
 * The Angular controller for the viewer window.
 * @param {Object} $scope The Angular scope for this controller.
 * @param {Object} $interval The Angular interval service.
 * @param {Object} $timeout Scoped timeouts service
 * @param {TabloidStore} tabloidStore Our high-level store interface.
 * @constructor
 */
function ViewerController($scope, $interval, $timeout, tabloidStore) {
  this.selectedSchedule = [];
  this.schedules = [];
  this.selectedScheduleIndex = 0;

  this.sources = {};
  this.urlSources = {};
  this.showContent = {};

  TabloidUtils.ZONES.forEach(function(zone) {
    this.sources[zone] = 'about:blank';
    this.showContent[zone] = true;
  }, this);
  this.sources[TabloidUtils.FULLSCREEN] = generateDefaultUrl(true);

  this.contentRefreshTimeout = {};
  this.contentWidth = {};
  this.contentHeight = {};
  this.contentXOffset = {};
  this.contentYOffset = {};

  this.tabloidStore = tabloidStore;
  this.scope = $scope;
  this.interval = $interval;
  this.timeout = $timeout;

  this.initialize();
}

/**
 * Initializes the controller.
 */
ViewerController.prototype.initialize = function() {
  // Register a callback for changes to the storage and reload right away.
  this.tabloidStore.setOnChangeCallback(this.onStorageChanged.bind(this));
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
ViewerController.prototype.onStorageChanged = function(
    collectionsChanged, collectionSettingsChanged,
    scheduleChanged, scheduleSettingsChanged) {
  var self = this;
  this.timeout(function() {
    if (scheduleChanged) {
      self.schedules = self.tabloidStore.getSchedules();
    }
    if (scheduleSettingsChanged) {
      self.selectedScheduleIndex =
          self.tabloidStore.getSchedulesSettings().selectedScheduleIndex || 0;
    }

    if (self.schedules.length <= self.selectedScheduleIndex) {
      self.selectedScheduleIndex = self.schedules.length - 1;
      scheduleChanged = true;
    }

    if (self.selectedScheduleIndex < 0 && self.schedules.length > 0) {
      self.selectedScheduleIndex = 0;
      scheduleChanged = true;
    }

    if (scheduleSettingsChanged || scheduleChanged) {
      self.scheduleSelected(self.selectedScheduleIndex);
    }
  });
};

/**
 * Returns the current time. Used for mocking time inside tests.
 * @return {moment} The current time.
 */
ViewerController.prototype.getCurrentTime = function() {
  return moment();
};



/**
 * Handles changes to the selected schedule. Only used in local demo mode.
 * @param {number} id The id of the selected collection.
 */
ViewerController.prototype.scheduleSelected = function(id) {
  if (id < 0) {
    this.selectedSchedule = [];
    if (this.screenUpdater)
      this.interval.cancel(this.screenUpdater);
    return;
  }
  this.selectedScheduleIndex = id;
  var schedule = this.schedules[id];
  this.selectedSchedule =
      schedule.items.map(TabloidUtils.createEventFromStorageRepresentation);
  if (!this.screenUpdater) {
    this.updateContent();
    this.screenUpdater =
        this.interval(this.updateContent.bind(this),
                      TabloidUtils.VIEWER_UPDATE_INTERVAL);
  }
};

/**
 * Downloads static content and caches it in local storage.
 * TODO(pastarmovj): Only temporary here until the full OfflineCache
 * implementation is ready.
 * @param {string} url The url to download
 */
ViewerController.prototype.downloadStaticContent = function(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';
  xhr.onload = function() {
    window.webkitRequestFileSystem(
        PERSISTENT, TabloidUtils.CACHE_FILE_SYSTEM_SIZE, function(fs) {
      fs.root.getFile(TabloidUtils.buildCacheFilename(url), {create: true},
                      function(fileEntry) {
        fileEntry.createWriter(function(writer) {
          var blob = new Blob([xhr.response], {type: 'image/jpg'});
          writer.write(blob);
        });
      });
    });
  };
  xhr.send();
};

/**
 * Loads static content that has been cached in local storage or shows the
 * online content and starts a download request if not yet present.
 * TODO(pastarmovj): Only temporary here until the full OfflineCache
 * implementation is ready.
 * @param {string} url The url to load
 * @param {string} zone The zone to show the url in
 */
ViewerController.prototype.loadStaticContent = function(url, zone) {
  var self = this;
  window.webkitRequestFileSystem(
      PERSISTENT, TabloidUtils.CACHE_FILE_SYSTEM_SIZE, function(fs) {
    fs.root.getFile(TabloidUtils.buildCacheFilename(url), {},
                    function(fileEntry) {
      // Get a File object representing the file,
      // then use FileReader to read its contents.
      fileEntry.file(function(file) {
        var reader = new FileReader();
        reader.onloadend = function() {
          var data = this.result;
          self.scope.$apply(function() {
            self.sources[zone] = data;
          });
        };
        reader.readAsDataURL(file);
      });
    }, function() {
      self.scope.$apply(function() {
        self.sources[zone] = url;
      });
      self.downloadStaticContent(url);
    });
  });
};

/**
 * Sets up the view according to a schedule item.
 * @param {Object} item The schedule entry to be visualized.
 */
ViewerController.prototype.presentContent = function(item) {
  // Check if any of the parameters has changed from what we are currently
  // showing and if needed update the view.
  if (this.urlSources[item.zone] !== item.content ||
      this.contentWidth[item.zone] !== item.zoneWidth ||
      this.contentHeight[item.zone] !== item.zoneHeight ||
      this.contentXOffset[item.zone] !== item.zoneXOffset ||
      this.contentYOffset[item.zone] !== item.zoneYOffset) {
    if (TabloidUtils.isStaticContent(item.content))
      this.loadStaticContent(item.content, item.zone);
    else
      this.sources[item.zone] = item.content;
    this.urlSources[item.zone] = item.content;
    this.contentWidth[item.zone] = item.zoneWidth;
    this.contentHeight[item.zone] = item.zoneHeight;
    this.contentXOffset[item.zone] = item.zoneXOffset;
    this.contentYOffset[item.zone] = item.zoneYOffset;
    this.contentRefreshTimeout[item.zone] = item.autoReload;
  }
  this.showContent[item.zone] = true;
};

/**
 * Periodically called to update the contents of the viewer.
 */
ViewerController.prototype.updateContent = function() {
  var now = this.getCurrentTime();
  var content_to_present = { fs: [], ul: [], ur: [], ll: [], lr: [] };

  // First mark all zones as empty.
  TabloidUtils.ZONES.forEach(function(zone) {
    this.showContent[zone] = false;
  }, this);

  // Filter.
  var self = this;
  this.selectedSchedule.forEach(function(item, index, items) {
    if (!item.hasOwnProperty('duration')) {
      content_to_present[item.zone].push({ event: item });
      return;
    }
    var mostRecentOccurence =
        TimeUtils.findMostRecentOccurrence(item, now);
    if (mostRecentOccurence &&
        moment.duration(now - mostRecentOccurence) < item.duration) {
      content_to_present[item.zone].push({ startTime: mostRecentOccurence,
                                           event: item });
    }
  });

  // Sort.
  for (var zone in content_to_present) {
    content_to_present[zone].sort(function(a, b) {
      if (!a.hasOwnProperty('startTime'))
        return 1;
      if (!b.hasOwnProperty('startTime'))
        return -1;
      if (a.startTime < b.startTime)
        return 1;
      else
        return -1;
    });
  }

  // Present.
  for (var zone in content_to_present) {
    if (content_to_present[zone].length > 0)
      this.presentContent(content_to_present[zone][0].event);
    else
      this.sources[zone] = this.urlSources[zone] = 'about:blank';
  }

  // Present default URL if nothing else is scheduled.
  if (this.sources[TabloidUtils.FULLSCREEN] === 'about:blank' &&
      this.schedules[this.selectedScheduleIndex].defaultUrl) {
    this.sources[TabloidUtils.FULLSCREEN] =
        this.urlSources[TabloidUtils.FULLSCREEN] =
        this.schedules[this.selectedScheduleIndex].defaultUrl;
  }

  // Show 'No policy received.', if no schedules exist.
  if (this.schedules.length === 0) {
    this.sources[TabloidUtils.FULLSCREEN] = generateDefaultUrl(true);
    this.urlSources[TabloidUtils.FULLSCREEN] = generateDefaultUrl(true);
    return;
  }

  // Show 'No content scheduled.', if nothing has been scheduled in any zone.
  if (TabloidUtils.ZONES.every(function(zone) {
      return (this.sources[zone] === 'about:blank');
    }, this)) {
    this.sources[TabloidUtils.FULLSCREEN] = generateDefaultUrl(false);
    this.urlSources[TabloidUtils.FULLSCREEN] = generateDefaultUrl(false);
  }
};

Tabloid.controller('ViewerController', ViewerController);
