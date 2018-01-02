// Copyright 2014 Google Inc. All Rights Reserved.

/**
 * @fileoverview Defines the window handlers for the scheduler view.
 */


/**
 * Handles resize events for the editor window. Resizes the calendar control
 * appropriately.
 * @return {boolean} Always false to not block other handlers from running.
 */
function scheduleResizeHandler() {
  var height = window.innerHeight - 70;
  $('#calendar').fullCalendar('option', 'height', height);
  return false;
}


// Make the UI follow the window size.
window.addEventListener('resize', scheduleResizeHandler);
window.addEventListener('load', function() {
  // Give it enough time to generate the DOM.
  setTimeout(scheduleResizeHandler, 100);
});
