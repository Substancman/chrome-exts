// Copyright 2014 Google Inc. All Rights Reserved.

/**
 * @fileoverview Provides some common constants and data structures used
 * throughout the code.
 */

/**
 * Commonly used utility functions.
 */
var Utils = {};

/**
 * This helper functions makes it easy to specify default values.
 * @param {Object} value The supplied value.
 * @param {Object} defaultValue The default value.
 * @return {Object} If |value| is not undefined returns |value|, otherwise
 *                  |defaultValue|.
 */
Utils.default = function(value, defaultValue) {
  return (typeof value !== 'undefined') ? value : defaultValue;
};

/**
 * Checks if a value is defined.
 * @param {Object} value The supplied value.
 * @return {Object} Returns true, |value| is not undefined, otherwise returns
 *                  false.
 */
Utils.isSet = function(value) {
  return (typeof value !== 'undefined');
};

/**
 * Searches an array for a specific element identified by its |id| field.
 * Returns |undefined| if no matching element is found.
 * @param {Object} id The object's id to be found.
 * @param {Array<Object>} items The array of objects.
 * @return {Object} Returns the object with id |id|, otherwise returns
 *                  undefined.
 */
Utils.findById = function(id, items) {
  var result;
  items.forEach(function(item) {
    if (id === item.id)
      result = item;
  });
  return result;
};

/**
 * A collection of utility functions for working with moments.
 */
var TimeUtils = {};

/**
 * Checks whether |item| is an all-day event.
 * @param {Object} item The calendar item.
 * @return {Boolean} Returns true, if |item| is an all-day event, otherwise
 *                   false.
 */
TimeUtils.isAllDay = function(item) {
  var end = item.start.clone().add(item.duration, 'milliseconds');
  if (item.start.valueOf() == item.start.clone().startOf('day').valueOf() &&
      end.valueOf() == end.clone().startOf('day').valueOf())
    return true;
  return false;
};

/**
 * Constructs a moment from the time portion of one and the date portion of
 * another |Date| object. Mostly useful when working with HTML input elements.
 * @param {Date} date The day, month and year of the moment.
 * @param {Date} time The hours and minutes of the moment.
 * @return {moment}
 */
TimeUtils.momentFromDateAndTime = function(date, time) {
  return moment([date.getFullYear(),
                 date.getMonth(),
                 date.getDate(),
                 time.getHours(),
                 time.getMinutes()]);
};

/**
 * Unfortunately the fullCalendar widget sometimes returns buggy dates, which
 * were not properly localized. This helper function fixes them.
 * @param {moment} m The moment to be fixed.
 * @return {moment} Fixed moment.
 */
TimeUtils.fixCalendarMoment = function(m) {
  var result = m.clone();
  if (m._isUTC)
    result = moment([m.year(), m.month(), m.date(), m.hours(), m.minutes()]);
  return result;
};

/**
 * Returns the most recent occurence of a repeating event. Returns |undefined|
 * if the repeating event has not yet started or already ended.
 * @param {Object} item The schedule item.
 * @param {moment} now The moment for which to find the most recent occurence.
 * @return {moment} Most recent occurence.
 */
TimeUtils.findMostRecentOccurrence = function(item, now) {
  // Show-forever events
  if (!item.hasOwnProperty('start'))
    return;

  // Item not yet started or already ended?
  if (item.start > now || (item.hasOwnProperty('end') && item.end < now))
    return;

  if (item.repetition === TabloidUtils.REPEAT_ONCE) {
    return item.start;
  }
  var mostRecentOccurrence = item.start.clone();
  mostRecentOccurrence.year(now.year());

  switch (item.repetition) {
    case TabloidUtils.REPEAT_HOURLY:
      mostRecentOccurrence.month(now.month());
      mostRecentOccurrence.date(now.date());
      mostRecentOccurrence.hour(now.hour());
      break;
    case TabloidUtils.REPEAT_DAYLY:
      mostRecentOccurrence.month(now.month());
      mostRecentOccurrence.date(now.date());
      break;
    case TabloidUtils.REPEAT_WEEKLY:
      mostRecentOccurrence.week(now.week());
      break;
    case TabloidUtils.REPEAT_MONTHLY:
      mostRecentOccurrence.month(now.month());
      break;
  }
  if (mostRecentOccurrence > now)
    mostRecentOccurrence
        .subtract(1, TabloidUtils.MOMENT_INTERVAL[item.repetition]);
  return mostRecentOccurrence;
};

/**
 * Stores commonly used constants and some general use functions that don't fall
 * in a particular category.
 */
var TabloidUtils = {
  // Some constants that represent time intervals in milliseconds.
  SECOND: 1000,
  MINUTE: 60 * 1000,
  HOUR: 60 * 60 * 1000,
  DAY: 24 * 60 * 60 * 1000,
  WEEK: 7 * 24 * 60 * 60 * 1000,

  // Keyboard codes used in the app.
  ENTER_KEY: 13,
  ESCAPE_KEY: 27,

  // Zone codes.
  FULLSCREEN: 'fs',
  UPPER_LEFT: 'ul',
  UPPER_RIGHT: 'ur',
  LOWER_LEFT: 'll',
  LOWER_RIGHT: 'lr',

  // Schedule repeat codes.
  REPEAT_ONCE: '-',
  REPEAT_HOURLY: 'h',
  REPEAT_DAYLY: 'd',
  REPEAT_WEEKLY: 'w',
  REPEAT_MONTHLY: 'm',

  // Maps the schedule repeat codes (see above) to moment.js's interval codes.
  MOMENT_INTERVAL: {
    '-': 'year',
    'h': 'hour',
    'd': 'day',
    'w': 'week',
    'm': 'month'
  },

  // Viewer update interval in milliseconds.
  VIEWER_UPDATE_INTERVAL: 10000,

  // The size of the virtual file system used for the file cache in bytes.
  CACHE_FILE_SYSTEM_SIZE: 2097152000
};

/**
 * An enumeration of the 5 supported screen zones.
 * @type {Array.<string>}
 */
TabloidUtils.ZONES = [
    TabloidUtils.FULLSCREEN,
    TabloidUtils.UPPER_LEFT,
    TabloidUtils.UPPER_RIGHT,
    TabloidUtils.LOWER_LEFT,
    TabloidUtils.LOWER_RIGHT];

/**
 * Fixes an URL if the user has not typed it properly.
 * @param {string} url The url to be cleaned up.
 * @return {string} The fixed url.
 */
TabloidUtils.fixUpUrl = function(url) {
  var result = url;
  if (url.indexOf('chrome-extension://') == 0)
    return result;

  if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0)
    result = 'http://' + url;

  return result;
};

/**
 * Get the file extension of a resource referenced by an URL.
 * @param {string} url The address of the file.
 * @return {string} The file extension or empty string if none found.
 */
TabloidUtils.getFileExtension = function(url) {
  var filename = url;
  var queryParams = url.indexOf('?');
  if (queryParams != -1) {
    filename = filename.substr(0, queryParams);
  }
  var extPosition = filename.lastIndexOf('.');
  var extension = '';
  if (extPosition != -1) {
    extension = filename.substr(extPosition);
  }
  return extension;
};

/**
 * Checks if a file is of a type that can be cached.
 * @param {string} url The address of the file.
 * @return {boolean} True if it is cachable.
 */
TabloidUtils.isStaticContent = function(url) {
  var staticFiletypes = ['.jpg', '.jpeg', '.png', '.pdf',
      '.gif', '.mov', '.mp4', '.mp3'];
  var extension = TabloidUtils.getFileExtension(url);
  return staticFiletypes.some(function(item) { return extension === item;});
};

/**
 * Builds a unique filename for the cached resource.
 * @param {string} url The source url to build cache filename for.
 * @return {string} The name of cache file. Unique and standardized.
 */
TabloidUtils.buildCacheFilename = function(url) {
  return webtoolkit.sha1sum(url) + TabloidUtils.getFileExtension(url);
};

/**
 * Creates the storage representation for the passed in fullcalendar |event|. In
 * particular this means that |start|, |end| and |duration| are added to the
 * storage representation only if they have valid values.
 * @param {Object} event A calendar event
 * @return {Object} The storage representation of the calendar event.
 */
TabloidUtils.createStorageRepresentationFromEvent = function(event) {
  var storageEvent = {
      'content': event.content,
      'zone': event.zone,
      'zoneWidth': event.zoneWidth,
      'zoneHeight': event.zoneHeight,
      'zoneXOffset': event.zoneXOffset,
      'zoneYOffset': event.zoneYOffset,
      'repetition': event.repetition,
      'autoReload': event.autoReload,
      'cachePolicy': event.cachePolicy
  };

  // The |start| property is missing for events that last forever.
  if (event.hasOwnProperty('start'))
    storageEvent['start'] = event.start.toString();

  // The |end| property is missing for reoccuring events that repeat
  // indefinitely.
  if (event.hasOwnProperty('end'))
    storageEvent['end'] = event.end.toString();

  // The |duration| property is missing for events that last forever.
  if (event.hasOwnProperty('duration'))
    storageEvent['duration'] = event.duration;

  return storageEvent;
};

/**
 * Creates a fullcalendar event from the storage representation.
 * @param {Object} storageEvent The event in storage representation.
 * @return {Object} Returns the created fullcalendar event.
 */
TabloidUtils.createEventFromStorageRepresentation = function(storageEvent) {
  var event = {
      'content': storageEvent.content,
      'zone': storageEvent.zone,
      'zoneWidth': storageEvent.zoneWidth,
      'zoneHeight': storageEvent.zoneHeight,
      'zoneXOffset': storageEvent.zoneXOffset,
      'zoneYOffset': storageEvent.zoneYOffset,
      'repetition': storageEvent.repetition,
      'autoReload': storageEvent.autoReload,
      'cachePolicy': storageEvent.cachePolicy
  };

  // The |start| property is missing for events that last forever.
  if (storageEvent.hasOwnProperty('start'))
    event['start'] = moment(storageEvent.start);

  // The |end| property is missing for reoccuring events that repeat
  // indefinitely.
  if (storageEvent.hasOwnProperty('end'))
    event['end'] = moment(storageEvent.end);

  // The |start| property is missing for events that last forever.
  if (storageEvent.hasOwnProperty('duration'))
    event['duration'] = storageEvent.duration;

  return event;
};

/**
 * Generates the default url to be shown when no content is scheduled.
 * @param {Boolean} policy_empty If set to true, indicates that no policy has
 *     been received yet. Otherwise no content has been scheduled.
 * @return {String} default url.
 */
 function generateDefaultUrl(policy_empty) {
  if (policy_empty)
    return 'chrome-extension://' + chrome.runtime.id + '/no_policy.html';
  else
    return 'chrome-extension://' + chrome.runtime.id + '/no_content.html';
 }


/**
 * Constructs an UI option element with a name and a string identifier.
 * @param {string} name The label of the option.
 * @param {string} id The identifier of the option.
 * @constructor
 */
function SelectOption(name, id) {
  this.name = name;
  this.id = id;
}
