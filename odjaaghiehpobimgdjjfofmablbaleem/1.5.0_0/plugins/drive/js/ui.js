/**
 * Declares the supported query parameters along with their types.
 */
var parameters = [
  {
    name: 'start',
    type: 'boolean'
  },
  {
    name: 'loop',
    type: 'boolean'
  },
  {
    name: 'rm',
    type: 'boolean'
  },
  {
    name: 'delayms',
    type: 'integer'
  }
];

/**
 * Dictionary mapping a query parameter name to its value.
 */
var settings = {};

/**
 * Google docs presentation id.
 */
var presentation_id;

/**
 * Function that parses a string to a boolean.
 * @param {string} s String representation of the boolean.
 * @return {boolean} The parsed boolean.
 */
var BooleanParser = function(s) {
  return (s === 'true' || s === 1);
};

/**
 * Function that parses a string to an integer.
 * @param {string} s String representation of the integer.
 * @return {Number} The parsed integer.
 */
var IntegerParser = function(s) {
  var n = parseInt(s);
  return isNaN(n) ? undefined : n;
};

/**
 * Function that parses settings for the 'hide-controls' query parameter to a
 * boolean.
 * @param {string} s String representation of the control value.
 * @return {string} The control value.
 */
var HideControlsParser = function(s) {
  return s === 'minimal';
};

/**
 * A dicionary mapping a type string to the respective parser.
 */
var Parser = {
  'start': BooleanParser,
  'loop': BooleanParser,
  'rm': HideControlsParser,
  'delayms': IntegerParser,
};

/**
 * This dictionary of maps a type string to a function which sets a property of
 * the respective type on the passed DOM object |e|.
 */
var Setter = {
  'boolean': function(v, e) {
    e.checked = v;
  },
  'integer': function(v, e) {
    e.value = v;
  }
};

/**
 * This dictionary maps a type string to a function which generates a string
 * representation of the setting.
 */
var Renderer = {
  'rm': function(v) {
    if (v)
      return 'minimal';
    else
      return;
  }
};

/**
 * This dictionary maps a type string to a function which retrieves a
 * property of the respective type from the passed DOM object |e|.
 */
var Getter = {
  'boolean': function(e) {
    return e.checked;
  },
  'integer': function(e) {
    return e.value;
  }
};

/**
 * Attempts to parse the passed in |url| and saves the extracted presentation id
 * in the global variable |presentation_id| and populates the |settings|
 * dictionary with the known settings extracted from the query parameters.
 * @param {string} url The url to parse.
 */
function drive_parser(url) {
    var regExp =
        /^.*docs.google.com.*\/presentation\/(.\/|embed\?id=)(.*?)($|\/|&).*/;
    var match = url.match(regExp);
    if (match && match[2])
        presentation_id = match[2];

    // extract parameters
    parameters.map(function(parameter) {
      var regExp = new RegExp('.*' + parameter.name + '=(.*?)($|&)');
      var match = url.match(regExp);
      if (match && match[1]) {
        var value = Parser[parameter.name](match[1]);
        if (typeof value !== 'undefined')
          settings[parameter.name] = value;
      }
    });
}

/**
 * Function invoked when the user presses the 'OK' button. If the url could not
 * be parsed, returns the unmodified url. If url was successfully parsed, builds
 * a new embedding url for the video id with the user specified options encoded
 * as query parameters.
 */
function done() {
  if (!presentation_id)
    resolve(url_typed);
  var result_url = 'https://docs.google.com/presentation/embed?id=' +
      presentation_id;

  parameters.forEach(function(parameter) {
    var element = document.getElementById(parameter.name);
    var value = Getter[parameter.type](element);
    if (typeof Renderer[parameter.name] !== 'undefined')
      var rendered = Renderer[parameter.name](value);
    else
      var rendered = value;
    if (typeof rendered !== 'undefined')
      result_url = result_url + '&' + parameter.name + '=' + rendered;
  });

  resolve(result_url);
  window.close();
}

/**
 * Once the window content has been successfully loaded, configures the
 * Bootstrap switches, parses the passed in url and updates the UI.
 */
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('done').onclick = done;
  $.fn.bootstrapSwitch.defaults.size = 'mini';
  $.fn.bootstrapSwitch.defaults.onColor = 'success';
  $.fn.bootstrapSwitch.defaults.offColor = 'danger';

  // extract settings from url
  drive_parser(url_typed);

  // update UI
  parameters.forEach(function(parameter) {
    var element = document.getElementById(parameter.name);
    if (settings.hasOwnProperty(parameter.name))
      Setter[parameter.type](settings[parameter.name], element);
  });

  // initialize buttons
  $("[id='start']").bootstrapSwitch();
  $("[id='loop']").bootstrapSwitch();
  $("[id='rm']").bootstrapSwitch();
}, false);
