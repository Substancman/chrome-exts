// Copyright 2014 Google Inc. All Rights Reserved.

/**
 * @fileoverview Tools used to augment UX.
 */


/**
 * Define a directive used to focus a particular control programmatically.
 */
Tabloid.directive('focus', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.$watch(attrs.focus, function(value) {
        if (value)
          element[0].focus();
      });
    }
  };
});

/**
 * Define a directive used to reload a particular webview programmatically.
 */
Tabloid.directive('reload', function($interval) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var interval;
      var timeoutId;

      function reload() {
        element[0].reload();
      }

      scope.$watch(attrs.reload, function(value) {
        if (value)
          timeoutId = $interval(reload, value);
        else if (timeoutId)
          $interval.cancel(timeoutId);
      });

      element.on('$destroy', function() {
        $interval.cancel(timeoutId);
      });
    }
  };
});
