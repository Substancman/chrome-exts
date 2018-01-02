// Copyright 2014 Google Inc. All Rights Reserved.

/**
 * @fileoverview Defines the window handlers for the viewer.
 */


/**
 * Handles resize events for the viewer window. Resizes the fullscreen webview
 * control appropriately.
 * TODO(cschuet): Remove this handler if not needed in the new design.
 * @return {boolean} Always false to not block other handlers from running.
 */
function ViewerResizeHandler() {
  var element = document.getElementById('fs-content');
  if (!element) {
    return false;
  }
  element.style.width = window.innerWidth + 'px';
  element.style.height = window.innerHeight + 'px';
  return false;
}


// Make the UI follow the window size.
window.addEventListener('resize', ViewerResizeHandler);
window.addEventListener('load', function() {
  // Give it enough time to settle.
  setTimeout(ViewerResizeHandler, 1000);
});
